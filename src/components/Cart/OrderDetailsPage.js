import React, { useState } from 'react';
import './OrderDetailsPage.css';
import { useNavigate } from 'react-router-dom';

function OrderDetailsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optionally validate here

    // Save to localStorage or pass via route state
    localStorage.setItem('anonOrderDetails', JSON.stringify(formData));

    // Navigate to receipt page
    navigate('/receipt');
  };

  return (
    <div className="order-details-page">
      <div className="form-container">
        <h2>Anonymous Order Details</h2>
        <p>Please fill in your details to proceed with the order.</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone Number" required onChange={handleChange} />
          <textarea name="address" placeholder="Shipping Address" required onChange={handleChange}></textarea>
          <button type="submit">Continue to Receipt</button>
        </form>
      </div>
    </div>
  );
}

export default OrderDetailsPage;
