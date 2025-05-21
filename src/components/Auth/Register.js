import React, { useState, useEffect } from 'react';
import './Register.css';
import axios from 'axios';

function Register() {
  const [step1Data, setStep1Data] = useState(null);
  const [password, setPassword] = useState('');

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
      alert('Registration successful!');
      localStorage.removeItem('registerStep1');
    } catch (err) {
      alert(err.response?.data?.msg || 'Registration failed');
    }
  };

  if (!step1Data) return null; // Wait for step 1 data

  return (
    <div className="register-page">
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
          <label htmlFor="terms">I agree to the terms and conditions</label><br /><br />
          <button type="submit" className="register-btn">Register</button>
          <p className="login-link">
            Already a member? <a href="/login">Login</a>
          </p>
        </form>
      </div>
      <div className="register-image">
        <img src="/assets/login.png" alt="Register" />
      </div>
    </div>
  );
}

export default Register;
