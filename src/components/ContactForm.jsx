import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <section id="contact" className="contact section-padding">
            <div className="container contact-container">
                <div className="contact-text">
                    <h2 className="section-title" style={{ textAlign: 'left' }}>Get Your Quote Today</h2>
                    <p>
                        Ready to elevate your product packaging? Fill out the form
                        and our team will get back to you within 24 hours with a custom quote
                        and digital proof.
                    </p>
                    <ul className="contact-benefits">
                        <li>✓ Free Digital Mockup</li>
                        <li>✓ No Minimum Order Quantity</li>
                        <li>✓ Fast Turnaround Time</li>
                    </ul>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                        <label>Product Details</label>
                        <textarea rows="4" placeholder="Tell us about your box requirements..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                        Request Quote
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
