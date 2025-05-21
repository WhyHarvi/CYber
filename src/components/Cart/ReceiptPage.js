import React, { useEffect, useState } from 'react';
import { getCart } from '../../Services/LocalStorage';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './ReceiptPage.css';

function ReceiptPage() {
    const cartItems = getCart();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const anonUser = localStorage.getItem('anonOrderDetails');

        if (token) {
            // Fetch user data from server
            fetch('http://localhost:5000/user-profile', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => {
                    if (!res.ok) throw new Error('Failed to fetch user profile');
                    return res.json();
                })
                .then((data) => {
                    setUser({
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        address: data.address,
                        type: 'Registered User',
                    });
                })
                .catch((err) => {
                    console.error(err);
                    alert('Session expired or user not found. Please log in again.');
                    window.location.href = '/login';
                });
        } else if (anonUser) {
            // Use local anonymous order data
            setUser({
                ...JSON.parse(anonUser),
                type: 'Anonymous Guest',
            });
        }
    }, []);


    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = subtotal * 0.15;
    const total = subtotal;

    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text('Receipt - CYber Shopping', 14, 20);

        if (user) {
            doc.setFontSize(12);
            doc.text(`Name: ${user.name || ''}`, 14, 30);
            doc.text(`Email: ${user.email || ''}`, 14, 37);
            doc.text(`Phone: ${user.phone || ''}`, 14, 44);
            doc.text(`Address: ${user.address || ''}`, 14, 51);
            doc.text(`Customer Type: ${user.type}`, 14, 58);
        }

        autoTable(doc, {
            startY: 65,
            head: [['Product', 'Price', 'Qty', 'Total']],
            body: cartItems.map((item) => [
                item.name,
                `C$${item.price}`,
                item.quantity,
                `C$${item.price * item.quantity}`,
            ]),
        });

        doc.text(`Subtotal: C$${subtotal.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);
        doc.text(`Tax (15%): C$${tax.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 17);
        doc.text(`Total: C$${(subtotal + tax).toFixed(2)}`, 14, doc.lastAutoTable.finalY + 24);

        doc.save('receipt.pdf');
    };

    return (
        <div className="receipt-page">
            <h1 className="receipt-title">MY SHOPPING BAG</h1>
            <p className="receipt-id">BAG #CACART{Date.now().toString().slice(-9)}</p>

            <div className="receipt-user">
                {user && (
                    <>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Address:</strong> {user.address}</p>
                        <p><strong>Type:</strong> {user.type}</p>
                    </>
                )}
            </div>

            <div className="receipt-items">
                {cartItems.map(item => (
                    <div className="receipt-item" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div>
                            <h3>{item.name}</h3>
                            <p>Price: C${item.price}</p>
                            <p>Qty: {item.quantity}</p>
                            <p>Total: C${item.price * item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>

            <hr />

            <div className="receipt-summary">
                <p><strong>Subtotal:</strong> C${subtotal.toFixed(2)}</p>
                <p><strong>Shipping:</strong> Free (Standard Shipping)</p>
                <p><strong>Estimated Tax (15%):</strong> C${tax.toFixed(2)}</p>
                <p><strong>Total:</strong> C${(subtotal + tax).toFixed(2)}</p>
            </div>

            <button className="download-btn" onClick={handleDownloadPDF}>Download PDF</button>
        </div>
    );
}

export default ReceiptPage;
