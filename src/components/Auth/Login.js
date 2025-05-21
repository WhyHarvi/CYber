import React, { useState } from "react";
import './Login.css';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

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
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2><br />
        <p>
          Enter valid details below to<br />
          login to your account
        </p>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
          <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>
          <label htmlFor="remember-me">Remember me</label> &nbsp;&nbsp;
          <a href="#" className="forgot-password">Forgot Password?</a><br /><br />
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
