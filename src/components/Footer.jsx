import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section-padding">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3>Cardbox Printing</h3>
                    <p>Premium custom packaging solutions for brands that care about quality.</p>
                </div>
                <div className="footer-col">
                    <h4>Links</h4>
                    <ul>
                        <li><a href="#specifications">Specifications</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Connect</h4>
                    <ul>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
            <div className="container footer-bottom">
                <p>&copy; {new Date().getFullYear()} Cardbox Printing. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
