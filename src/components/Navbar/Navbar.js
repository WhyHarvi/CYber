import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filtered = (products || []).filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 const handleSelect = (value) => {
  setSearchTerm(value);
  setShowSuggestions(false);

  // Scroll to product section
  const target = document.getElementById('products');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  // Highlight matched product card (by text)
  setTimeout(() => {
    const cards = document.querySelectorAll('.products-item');
    cards.forEach((card) => {
      if (card.innerText.toLowerCase().includes(value.toLowerCase())) {
        card.classList.add('highlight');
        setTimeout(() => card.classList.remove('highlight'), 4000);
      }
    });
  }, 500); // small delay to allow scroll/render
};


  const handleSearchClick = () => {
    if (filtered.length > 0) {
      handleSelect(filtered[0].name);
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <h2><strong>CY</strong>ber</h2>
      </div>

      {/* Search Bar with Suggestions */}
      <div className="nav-search" style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowSuggestions(true);
          }}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        />



        {searchTerm && (
          <button className="clear-btn-box" onClick={() => setSearchTerm('')}>
            <i className="bx bx-x"></i>
          </button>
        )}

        <button className="search-btn" onClick={handleSearchClick}>
          <i className='bx bx-search'></i>
        </button>

        {showSuggestions && searchTerm && (
          <div className="suggestions-box">
            {filtered.length > 0 ? (
              filtered.slice(0, 5).map((p) => (
                <div
                  key={p.id}
                  className="suggestion"
                  onClick={() => handleSelect(p.name)}
                >
                  {p.name}
                </div>
              ))
            ) : (
              <div className="suggestion">No results</div>
            )}
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact Us</Link></li>
          <li><Link to="/">Blog</Link></li>
        </ul>

        <Link to="/cart">
          <button className="cart-btn">
            <i className='cart-icon bx bxs-shopping-bag'></i>
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
