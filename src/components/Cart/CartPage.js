import './CartPage.css';
import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import { getCart, saveCart } from '../../Services/LocalStorage';
import { useNavigate } from 'react-router-dom';

function CartPage() {

    const [cartItems, setCartItems] = useState(getCart());

    function addQuantity(product) {
        const updatedCart = cartItems.map(item => {
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }); 
        setCartItems(updatedCart);
        saveCart(updatedCart);
    }

    function removeQuantity(product) {
        const updatedCart = cartItems.map(item => {
            if (item.id === product.id) {
                if (item.quantity === 1) {
                    return { ...item, quantity: item.quantity };
                }
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
        saveCart(updatedCart);
    }


    function removeItem(product) {
        const updatedCart = cartItems.filter(item => item.id !== product.id);
        setCartItems(updatedCart);
        saveCart(updatedCart);
    }

    return (
        <div>
            <div className="banner mb-5">
                <img src="../../assets/cartBanner.jpg" alt="Cart" width="100%" className="cart-image" />
            </div>

            <div className="row justify-content-center cart-container">
                <div className="cart-col col-7">
                    <h1 className="cart-title">YOUR SELECTIONS</h1>
                    <hr />
                    <div className="cart-items">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div className="cart-item row" key={item.id}>
                                    <img src={item.image} alt={item.name} className="cart-item-image col-3" />
                                    <div className="cart-item-details  mt-4 col-9">
                                        <h2 className="cart-item-name">{item.name}</h2>
                                        <p className="cart-item-price">${item.price}</p>
                                        <p className="cart-item-quantity mb-5">Quantity: {item.quantity}</p>

                                        <button className='addQuantity' onClick={ () => addQuantity(item)}>+</button>
                                        <button className='addQuantity' onClick={ () => removeQuantity(item)}>-</button>
                                        <button className='remove-button' onClick={ () => removeItem(item)}><i class="bi bi-trash"></i></button>

                                    </div>

                                    <hr />
                                </div>
                                
                            ))
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                    </div>
                </div>

                <div className="summary-col col-3">
                    <h2 className="cart-summary-title">Cart Summary</h2>
                    <div className="cart-summary">

                        <div>Order NO: CACART411724128</div>
                        <hr />

                        <div className="cart-summary-item row justify-content-center">
                            <p className="cart-summary-text col-6">Total Items</p>
                            <p className="cart-summary-value col-6">{cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
                        </div>

                        <div className="cart-summary-item row justify-content-center">
                            <p className="cart-summary-text col-6">Total Price</p>
                            <p className="cart-summary-value col-6">C${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
                        </div>

                        <div className="cart-summary-item row justify-content-center">
                            <p className="cart-summary-text col-6">Shipping</p>
                            <p className="cart-summary-value col-6 gray">Free(Standard Shipping)</p>
                        </div>

                        <div className="cart-summary-item row justify-content-center">
                            <p className="cart-summary-text col-6">Estimated Tax(15%)</p>
                            <p className="cart-summary-value col-6 gray">
                                -C${((cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)) * 0.15).toFixed(2)}
                            </p>
                        </div>

                        <hr />
                        <div className="cart-summary-item row justify-content-center">
                            <p className="cart-summary-text col-6">Total</p>
                            <p className="cart-summary-value total col-6">C${(cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) - ((cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)) * 0.15)).toFixed(2)}</p>
                        </div>

                        <div className="cart-summary-item row justify-content-center">
                            <p className="cart-summary-text col-6"> </p>
                            <p className="cart-summary-value col-6">Import Duties included</p>
                        </div>

                        <div className="mt-5 gray">
                            You will be charged at the time of shipment. If this is a personalized or made-to-order purchase, you will be charged at the time of order. 
                        </div>

                        <button className="btn checkout-button mt-4">CHECKOUT</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CartPage;