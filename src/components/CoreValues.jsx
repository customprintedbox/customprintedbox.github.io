import React from 'react';
import './CoreValues.css';

const values = [
    {
        title: 'Export Quality',
        description: 'International standard materials and printing precision.',
        icon: '✨'
    },
    {
        title: 'Worldwide Delivery',
        description: 'Fast and reliable shipping to over 50 countries.',
        icon: '🌍'
    },
    {
        title: 'Free Samples',
        description: 'Get a physical sample kit before placing bulk orders.',
        icon: '📦'
    },
    {
        title: 'Custom Designs',
        description: 'Full customization from size to finish and texture.',
        icon: '🎨'
    }
];

const CoreValues = () => {
    return (
        <section className="values section-padding">
            <div className="container">
                <div className="values-grid">
                    {values.map((val, idx) => (
                        <div className="value-card" key={idx}>
                            <div className="value-icon">{val.icon}</div>
                            <h3>{val.title}</h3>
                            <p>{val.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
