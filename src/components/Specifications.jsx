import React from 'react';
import './Specifications.css';

const specs = [
    'UV Coating', 'Embossing', 'Debossing',
    'Reverse Tuck', 'Auto Tuck', 'Spot UV',
    'Foil Stamping', 'Matte Finish', 'Gloss Finish'
];

const Specifications = () => {
    return (
        <section id="specifications" className="specifications section-padding">
            <div className="container">
                <h2 className="section-title">Premium Specifications</h2>
                <p className="section-subtitle">Choose from a variety of finishes and structural designs to match your brand.</p>

                <div className="specs-grid">
                    {specs.map((item, idx) => (
                        <div className="spec-item" key={idx}>
                            <div className="check-icon">✓</div>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specifications;
