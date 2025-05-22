import React, { useState, useEffect } from 'react';
import './Register.css';
import axios from 'axios';

function Register() {
  const [step1Data, setStep1Data] = useState(null);
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('registerStep1');
    if (data) {
      setStep1Data(JSON.parse(data));
    } else {
      // Redirect back if no step 1 data
      window.location.href = '/register-step-1';
    }
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const fullData = { ...step1Data, password };
      await axios.post('http://localhost:5000/register', fullData);
      window.location.href = '/login'; // Redirect to login page after successful registration
      localStorage.removeItem('registerStep1');
    } catch (err) {
  setPopupMessage(err.response?.data?.msg || 'Something went wrong, please try again.');
  setShowPopup(true);
    }
  };

  if (!step1Data) return null; // Wait for step 1 data

  return (
    <div className="register-page">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>{popupMessage}</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
      <div className="register-container">
        <h2>Create Account</h2>
        <p>Set your password and accept terms</p>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            value={step1Data.email}
            readOnly
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">I agree to the terms and conditions</label><br />
          <button type="submit" className="register-btn">Register</button>
          <p className="login-link">
            Already a member? <a href="/login">Login</a>
          </p>
        </form>
      </div>
      <div className="register-image1">
        <img src="/assets/register.png" alt="Register" />
      </div>
    </div>
  );
}

export default Register;
