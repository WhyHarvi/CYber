import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterStep1.css';

function RegisterStep1() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    province: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Save to localStorage
    localStorage.setItem('registerStep1', JSON.stringify(formData));
    navigate('/registerNext'); // go to Register.js page (step 2)
  };

  return (
    <div className="register-page1">
    <form onSubmit={handleNext} className="register-form">
      <h2>Register</h2>
      <p>Enter valid details below to register as new user</p>
      <input type="text" name="firstName" placeholder="First name" onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last name" onChange={handleChange} required />
      <input type="text" name="contact" placeholder="Contact No." onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <input type="text" name="city" placeholder="City" onChange={handleChange} required />
      <input type="text" name="zipCode" placeholder="Zip Code" onChange={handleChange} required />
      <select name="province" onChange={handleChange} required>
        <option value="">Select Province</option>
        <option value="ON">Ontario</option>
        <option value="BC">British Columbia</option>
        <option value="QC">Quebec</option>
        <option value="AB">Alberta</option>
        <option value="MB">Manitoba</option>
        <option value="SK">Saskatchewan</option>
        <option value="NS">Nova Scotia</option>
        <option value="NB">New Brunswick</option>
        <option value="PE">Prince Edward Island</option>
        <option value="NL">Newfoundland and Labrador</option>
      </select>
      <button type="submit">Next →</button>
      <p>Already a member? <a href="/login">Login</a></p>
    </form>
      <div className="register-image">
        <img src="\assets\register.png" alt="Register" />
      </div>
  </div>
  );
}

export default RegisterStep1;
