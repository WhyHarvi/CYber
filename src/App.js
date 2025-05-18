import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import HomePage from './components/Home/HomePage';
import ProductPage from './components/Product/ProductPage';
import CartPage from './components/Cart/CartPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
       
      </Routes>
    </Router>
  );
}

export default App;
