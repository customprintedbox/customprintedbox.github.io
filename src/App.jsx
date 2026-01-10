import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreValues from './components/CoreValues';
import Specifications from './components/Specifications';
import ProductGallery from './components/ProductGallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CoreValues />
      <Specifications />
      <ProductGallery />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
