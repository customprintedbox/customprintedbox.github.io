import React from 'react';
import './ProductGallery.css';

import img1 from '../assets/images/beard-oil-row.jpg';
import img2 from '../assets/images/beard-oil-colors.jpg';
import img3 from '../assets/images/perfume-boxes.jpg';
import img4 from '../assets/images/cosmetic-set.png';

const projects = [
    { img: img1, title: 'Luxury Beard Oil Series' },
    { img: img2, title: 'Vibrant Packaging Collection' },
    { img: img3, title: 'Minimalist Perfume Box' },
    { img: img4, title: 'Complete Cosmetic Set' },
];

const ProductGallery = () => {
    return (
        <section id="products" className="gallery section-padding">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Real results from our satisfied clients.</p>

                <div className="gallery-grid">
                    {projects.map((project, idx) => (
                        <div className="gallery-item" key={idx}>
                            <div className="img-wrapper">
                                <img src={project.img} alt={project.title} />
                            </div>
                            <div className="gallery-info">
                                <h4>{project.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGallery;
