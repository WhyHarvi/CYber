import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <h2><strong>CY</strong>ber</h2>
      </div>

      {/* Search Bar */}
      <div className="nav-search">
        <input type="text" placeholder="Search products here" />
        <button className="search-btn">
          <i className='bx bx-search'></i>
        </button>
      </div>

      {/* Right Links + Icons */}
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact Us</Link></li>
          <li><Link to="/">Blog</Link></li>
        </ul>

        <Link to="/cart">
          <button className="cart-btn">
            < i className='cart-icon bx  bxs-shopping-bag'  ></i>
          </button>
        </Link>

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
