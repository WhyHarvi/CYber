import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';



import { useState } from 'react';


function HomePage({products}) {
    // Add these before return
    const [selectedCategory, setSelectedCategory] = useState('All Products');

    const categories = ['All Products', 'New Arrivals', 'Best Sellers', 'Featured products'];

   

    // Filter products
    const filteredProducts =
        selectedCategory === 'All Products'
            ? products
            : products.filter((product) => product.category === selectedCategory);

            
    return (
        <><>
        
        <div className="homepage">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-text">
                    <p className="label">Pro. Beyond.</p>
                    <h1>CY<span>ber</span></h1>
                    <p className="subtext">
                        Created to change everything for the better. For everyone.
                    </p>
                    <a href="#products">
                        <button className="shop-btn">Explore Products</button>
                    </a>
                </div>

                <div className="hero-image">
                    <img src="/assets/iphone 16 pro.png" alt="iPhone 16 Pro" />
                </div>
            </section>

        </div>
            <section className="feature-grid">
                {/* Top Row: 2 wide horizontal cards */}
                <div className="first-row">
                    <div className='upper-row'>
                        <div className="feature-item large hover-card">
                            <img src="/assets/ps5.png" alt="Playstation 5" />
                            <div className="feature-text">
                                <h2>Playstation 5</h2>
                                <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                            </div>
                            <div className="overlay">
                                <button className="shop-overlay-btn">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='lower-row'>
                        {/* Bottom Row: 2 small stacked vertical cards */}
                        <div className="feature-row">

                            <div className="feature-item small grey hover-card">
                                <img src="/assets/airpods.png" alt="AirPods Max" />
                                <div className="feature-text">
                                    <h3>Apple <strong>AirPods Max</strong></h3>
                                    <p>Computational audio. Listen, it’s powerful.</p>
                                </div>
                                <div className="overlay">
                                    <button className="shop-overlay-btn">Shop Now</button>
                                </div>
                            </div>

                            <div className="feature-item small dark hover-card">
                                <img src="/assets/visionpro.png" alt="Apple Vision Pro" />
                                <div className="feature-text">
                                    <h3>Apple <strong>Vision Pro</strong></h3>
                                    <p>An immersive way to experience entertainment</p>
                                </div>
                                <div className="overlay">
                                    <button className="shop-overlay-btn">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom Row: 1 wide horizontal card */}
                <div className="second-row">
                    <div className="feature-item large reverse grey hover-card">
                        <div className="feature-text mac">
                            <h2>Macbook <span>Air</span></h2>
                            <p>The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                        </div>
                        <img src="/assets/macbook.png" alt="Macbook Air" />

                        <div className="overlay">
                            <button className="shop-overlay-btn">Shop Now</button>
                        </div>
                    </div>

                </div>
            </section></>

            <section className='category-row'>

                <div className="category-heading">
                    <h3>Browse By Category</h3>
                </div>
                <div className="category ">
                    <div><i className='bx bx-mobile'></i><a>Phones</a></div>
                    <div><i className='bx bx-tab'></i><a>Tablets</a></div>
                    <div><i className='bx bx-laptop'></i><a>Computers</a></div>
                    <div><i className='bx bx-headphone'></i><a>Accessories</a></div>
                    <div><i className='bx bx-time-five'></i><a>Wearables</a></div>
                    <div><i className='bx bx-home-alt'></i><a>Smart Home</a></div>
                </div>

            </section>


            <section className="products-section" id="products">
                <div className="category-filter">
                    {categories.map((cat) => (
                        <div key={cat}>
                            <button
                                className={selectedCategory === cat ? 'active-filter' : ''}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="products-row">
                    {filteredProducts.map((product) => (
                        <div className="products-item fade-in" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <p>{product.name}</p>
                            <h4>${product.price}</h4>
                            <button className="buy-btn">Buy Now</button>
                        </div>
                    ))}
                </div>

            </section>
                    

            <section className='sale-banner'>
                <div className='sale-img'> <img src="/assets/sale 1_enhanced.png" alt="iPhone 15 Pro" /> </div>
                <div className='sale-text'>
                    <h2>Big Summer <span>Sale</span></h2>
                    <p>Get up to 50% off on selected items</p>
                    <a href="#products">
                        <button className="shop-btn">Shop Products</button>
                    </a>
                </div>
                <div className='sale-img'> <img src="/assets/APS-KV_PC_1600x864.png" alt="iPhone 15 Pro" /></div>
            </section>

        </>
    );



}

export default HomePage;
