import React, { useState } from "react";
import './Login.css';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault(); // prevent form refresh
    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });
      
      const storage = rememberMe ? localStorage : sessionStorage; // use localStorage if rememberMe is checked
      storage.setItem('token', res.data.token); // store JWT token
      storage.setItem('username', res.data.name);
      storage.setItem('loginTime', Date.now()); // store login time
      
      window.location.href = '/'; // redirect to home page
    } catch (err) {
  setPopupMessage(err.response?.data?.msg || 'Incorrect email or password, please try again.');
  setShowPopup(true);
}

  };

  return (
    
    <div className="login-page">
      <div className="login-container">
         {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>{popupMessage}</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}

        <h2>Login</h2>
        <p>
          Enter valid details below to<br />
          login to your account
        </p>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
          
          <div className="remember-me"><input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>
          <label htmlFor="remember-me">Remember me</label> &nbsp;&nbsp;
          <a href="#" className="forgot-password">Forgot Password?</a></div>

          <button type="submit" className="login-btn">Login</button>
          <p className="register-link">
            Not a member yet? <a href="/register">Register</a>
          </p>
        </form>
      </div>
      <div className="login-image">
        <img className="login-image-img" src="/assets/login.png" alt="Login" />
      </div>
    </div>
  );
}

export default Login;
