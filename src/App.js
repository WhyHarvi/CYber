import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/RegisterStep1';
import HomePage from './components/Home/HomePage';
import ProductPage from './components/Product/ProductPage';
import CartPage from './components/Cart/CartPage';
import RegisterNext from './components/Auth/Register';
import EditProfile from './components/Auth/EditProfile';
import OrderDetailsPage from './components/Cart/OrderDetailsPage';
import ReceiptPage from './components/Cart/ReceiptPage';

function App() {
  const products = [
        {
            id: 1,
            name: 'Apple iPhone 16 Pro Max 128GB Deep Purple (MQA93Z/A)',
            price: 1999,
            image: '/assets/iphone 16 pro.png',
            category: 'Featured products',
            ScreenSize: '6.7"',
            Cpu: 'A17 Pro',
            Ram: '8GB',
            Battery: '4422mAh',
            Camera: '48MP',
            FrontCamera: '12MP',
            Description: 'The iPhone 16 Pro Max is the latest flagship smartphone from Apple, featuring a stunning 6.7-inch Super Retina XDR display, A17 Pro chip for lightning-fast performance, and an advanced camera system with a 48MP main sensor. With 128GB of storage, it offers ample space for your apps and media. The Deep Purple color adds a touch of elegance to this powerful device.'
        },
        {
            id: 2,
            name: 'Samsung FlipZ 5 128GB Ocean Blue (active) (SM-F520BZ93Z/A)',
            price: 1299,
            image: '/assets/flipz.png',
            category: 'New Arrivals',
            ScreenSize: '5.7"',
            Cpu: 'Snapdragon 8 Gen 2',
            Ram: '8GB',
            Battery: '3700mAh',
            Camera: '12MP',
            FrontCamera: '10MP',
            Description: 'The Samsung Galaxy Z Flip 5 is a foldable smartphone that combines style and functionality. With its unique clamshell design, it features a 6.7-inch Dynamic AMOLED display that folds in half for easy portability. The Snapdragon 8 Gen 2 processor ensures smooth performance, while the dual-camera system captures stunning photos. The Ocean Blue color adds a refreshing touch to this innovative device.'
        },
        {
            id: 3,
            name: 'Windows 11pro notebook 1TB Nvidia GeForce RTX 4060 Laptop',
            price: 1499,
            image: '/assets/laptop.png',
            category: 'Featured products',
            ScreenSize: '5.8"',
            Cpu: 'Intel Core i7',
            Ram: '16GB',
            Battery: '5000mAh',
            Camera: '1080p',
            FrontCamera: '720p',
            Description: 'The Windows 11 Pro notebook is a powerful laptop designed for productivity and gaming. Equipped with a 1TB SSD and Nvidia GeForce RTX 4060 graphics card, it delivers exceptional performance for demanding tasks. The Intel Core i7 processor ensures fast processing speeds, while the 16GB of RAM allows for smooth multitasking. The sleek design and high-resolution display make it perfect for both work and play.'
        },
        {
            id: 4,
            name: 'Samsung Watch 6 Classic 43mm Silver (SM-R940NZSAXSA)',
            price: 199,
            image: '/assets/watch.png',
            category: 'New Arrivals',
            ScreenSize: '6.2"',
            Cpu: 'Exynos W930',
            Ram: '2GB',
            Battery: '300mAh',
            Camera: 'N/A',
            FrontCamera: 'N/A',
            Description: 'The Samsung Galaxy Watch 6 Classic is a premium smartwatch that combines style and functionality. With its 43mm stainless steel case and rotating bezel, it offers a classic look while providing advanced health and fitness tracking features. The Exynos W930 processor ensures smooth performance, and the 2GB of RAM allows for seamless app usage. Stay connected and track your fitness goals with this elegant smartwatch.'
        },
        {
            id: 5,
            name: 'Galaxy S25 Ultra 256GB Phantom Black 1TB (SM-S918B/DS)',
            price: 2299,
            image: '/assets/s24.png',
            category: 'Best Sellers',
            ScreenSize: '6.3"',
            Cpu: 'Exynos 2200',
            Ram: '12GB',
            Battery: '5000mAh',
            Camera: '200MP',
            FrontCamera: '12MP',
            Description: 'The Samsung Galaxy S25 Ultra is a flagship smartphone that redefines mobile photography. With its 200MP camera and advanced AI features, it captures stunning photos in any lighting condition. The 6.3-inch Dynamic AMOLED display offers vibrant colors and sharp details, while the Exynos 2200 processor ensures lightning-fast performance. With 256GB of storage and a sleek design, it is the ultimate device for tech enthusiasts.'
        },
        {
            id: 6,
            name: 'Tablet 10.9"  iPad Pro 64GB Wi-Fi (2025)',
            price: 699,
            image: '/assets/tab.png',
            category: 'Best Sellers',
            ScreenSize: '5.2"',
            Cpu: 'Apple M2',
            Ram: '8GB',
            Battery: '7538mAh',
            Camera: '12MP',
            FrontCamera: '12MP',
            Description: 'The iPad Pro 10.9" is a powerful tablet designed for creativity and productivity. With its Apple M2 chip, it delivers exceptional performance for demanding tasks. The 64GB of storage provides ample space for apps and media, while the 12MP rear and front cameras allow for stunning photography and video calls. The sleek design and high-resolution display make it perfect for both work and entertainment.'
        },
        {
            id: 7,
            name: '65" Crystal UHD U8200F 4K Smart TV (2025)',
            price: 949,
            image: '/assets/smart tv.png',
            category: 'New Arrivals',
            ScreenSize: '5.9"',
            Cpu: 'Quad-Core',
            Ram: '4GB',
            Battery: 'N/A',
            Camera: 'N/A',
            FrontCamera: 'N/A',
            Description: 'The 65" Crystal UHD U8200F 4K Smart TV offers stunning picture quality and immersive entertainment. With its 4K resolution and HDR support, it delivers vibrant colors and sharp details for an incredible viewing experience. The smart features allow you to access your favorite streaming services and apps with ease. The sleek design and large screen make it the perfect centerpiece for your home theater setup.'
        },
        {
            id: 8,
            name: 'Samsung Buds 2 Pro (SM-R510) Graphite',
            price: 299,
            image: '/assets/buds.png',
            category: 'Best Sellers',
            ScreenSize: '6.6"',
            Cpu: 'N/A',
            Ram: 'N/A',
            Battery: '500mAh',
            Camera: 'N/A',
            FrontCamera: 'N/A',
            Description: 'The Samsung Galaxy Buds 2 Pro are premium wireless earbuds that deliver exceptional sound quality and comfort. With their ergonomic design and active noise cancellation, they provide an immersive listening experience. The 500mAh battery ensures long playback time, while the sleek Graphite color adds a touch of elegance. Stay connected and enjoy your favorite music with these stylish earbuds.'
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
        <Route path="/products/:id" element={<ProductPage products={products} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/registerNext" element={<RegisterNext />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/order-details" element={<OrderDetailsPage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
