import React from 'react';
import './Hero.css';
import heroImage from '../assets/images/beard-oil-colors.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1>Premium Custom Printed Boxes</h1>
                    <p>
                        Elevate your brand with high-quality, custom-designed packaging.
                        We deliver excellence in every box, ensuring your product stands out on the shelf.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">Request Free Sample</button>
                        <button className="btn btn-outline">Get Quote</button>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <img src={heroImage} alt="Premium Custom Boxes" className="hero-image" />
                    <div className="hero-badge">
                        <span>Premium Quality</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
