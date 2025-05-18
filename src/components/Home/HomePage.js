import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <><div className="homepage">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-text">
                    <p className="label">Pro. Beyond.</p>
                    <h1>iPhone 16 <span>Pro</span></h1>
                    <p className="subtext">
                        Created to change everything for the better. For everyone.
                    </p>
                    <button className="shop-btn">Shop Now</button>
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
                <div className="second-row" >
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


    );



}

export default HomePage;
