import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import HomePage from './components/Home/HomePage';
import ProductPage from './components/Product/ProductPage';
import CartPage from './components/Cart/CartPage';


function App() {
  const products = [
        {
            id: 1,
            name: 'Apple iPhone 16 Pro Max 128GB Deep Purple (MQA93Z/A)',
            price: 1999,
            image: '/assets/iphone 16 pro.png',
            category: 'Featured products',
        },
        {
            id: 2,
            name: 'Samsung FlipZ 5 128GB Ocean Blue (active) (SM-F520BZ93Z/A)',
            price: 1299,
            image: '/assets/flipz.png',
            category: 'New Arrivals',
        },
        {
            id: 3,
            name: 'Windows 11pro notebook 1TB Nvidia GeForce RTX 4060 Laptop',
            price: 1499,
            image: '/assets/laptop.png',
            category: 'Featured products',
        },
        {
            id: 4,
            name: 'Samsung Watch 6 Classic 43mm Silver (SM-R940NZSAXSA)',
            price: 199,
            image: '/assets/watch.png',
            category: 'New Arrivals',
        },
        {
            id: 5,
            name: 'Galaxy S25 Ultra 256GB Phantom Black 1TB (SM-S918B/DS)',
            price: 2299,
            image: '/assets/s24.png',
            category: 'Best Sellers',
        },
        {
            id: 6,
            name: 'Tablet 10.9"  iPad Pro 64GB Wi-Fi (2025)',
            price: 699,
            image: '/assets/tab.png',
            category: 'Best Sellers',
        },
        {
            id: 7,
            name: '65" Crystal UHD U8200F 4K Smart TV (2025)',
            price: 949,
            image: '/assets/smart tv.png',
            category: 'New Arrivals',
        },
        {
            id: 8,
            name: 'Samsung Buds 2 Pro (SM-R510) Graphite',
            price: 299,
            image: '/assets/buds.png',
            category: 'Best Sellers',
        },
    ];
  return (
    <Router>
      <Navbar products={products} />
      {/* Main content area */}
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
