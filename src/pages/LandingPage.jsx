import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import {
  Sparkles,
  Layers,
  Box,
  Lock,
  Zap,
  Star,
  Globe,
  Truck,
  Package,
  Palette,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react';
import { specifications, products, features, mockSubmitSampleRequest, mockSubmitContact } from '../mock';

const iconMap = {
  Sparkles,
  Layers,
  Box,
  Lock,
  Zap,
  Star,
  Globe,
  Truck,
  Package,
  Palette
};

const LandingPage = () => {
  const [sampleForm, setSampleForm] = useState({ name: '', email: '', message: '' });
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loadingSample, setLoadingSample] = useState(false);
  const [loadingContact, setLoadingContact] = useState(false);

  const handleSampleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSample(true);
    try {
      const result = await mockSubmitSampleRequest(sampleForm);
      toast.success(result.message);
      setSampleForm({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to submit request. Please try again.');
    } finally {
      setLoadingSample(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoadingContact(true);
    try {
      const result = await mockSubmitContact(contactForm);
      toast.success(result.message);
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoadingContact(false);
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <Box className="logo-icon" />
            <span>CustomPrintedBox</span>
          </div>
          <nav className="nav">
            <button onClick={() => scrollToSection('specifications')}>Specifications</button>
            <button onClick={() => scrollToSection('products')}>Products</button>
            <button onClick={() => scrollToSection('samples')}>Samples</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Premium Custom <span className="hero-highlight">Printed Boxes</span>
            </h1>
            <p className="hero-subtitle">
              Export quality card packaging with UV coating, embossing, and premium finishes.
              Delivered worldwide with precision and excellence.
            </p>
            <div className="hero-buttons">
              <Button
                size="lg"
                className="hero-cta-primary"
                onClick={() => scrollToSection('samples')}
              >
                Request Free Sample
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hero-cta-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <Card key={feature.id} className="feature-card">
                <CardContent className="feature-content">
                  <div className="feature-icon-wrapper">
                    <IconComponent className="feature-icon" />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specifications" className="specifications-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Premium Specifications</h2>
            <p className="section-subtitle">
              Advanced printing techniques and finishing options for exceptional packaging
            </p>
          </div>
          <div className="specifications-grid">
            {specifications.map((spec) => {
              const IconComponent = iconMap[spec.icon];
              return (
                <Card key={spec.id} className="spec-card">
                  <CardContent className="spec-content">
                    <IconComponent className="spec-icon" />
                    <h3 className="spec-title">{spec.name}</h3>
                    <p className="spec-description">{spec.description}</p>
                    <CheckCircle className="spec-check" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section id="products" className="products-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Success Projects</h2>
            <p className="section-subtitle">
              Explore our portfolio of premium custom printed boxes
            </p>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <Card key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="product-image"
                  />
                  <div className="product-overlay">
                    <span className="product-category">{product.category}</span>
                  </div>
                </div>
                <CardContent className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Request Section */}
      <section id="samples" className="samples-section">
        <div className="samples-container">
          <div className="samples-content">
            <div className="samples-text">
              <h2 className="samples-title">Request Free Samples</h2>
              <p className="samples-description">
                Experience our quality firsthand. We'll send you samples of our successful
                projects to showcase our premium craftsmanship and attention to detail.
              </p>
              <ul className="samples-benefits">
                <li>
                  <CheckCircle className="benefit-icon" />
                  <span>Free worldwide shipping on samples</span>
                </li>
                <li>
                  <CheckCircle className="benefit-icon" />
                  <span>Multiple specification options</span>
                </li>
                <li>
                  <CheckCircle className="benefit-icon" />
                  <span>Quick turnaround time</span>
                </li>
              </ul>
            </div>
            <Card className="samples-form-card">
              <CardContent className="samples-form-content">
                <form onSubmit={handleSampleSubmit}>
                  <div className="form-group">
                    <Input
                      placeholder="Your Name"
                      value={sampleForm.name}
                      onChange={(e) => setSampleForm({ ...sampleForm, name: e.target.value })}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={sampleForm.email}
                      onChange={(e) => setSampleForm({ ...sampleForm, email: e.target.value })}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      value={sampleForm.message}
                      onChange={(e) => setSampleForm({ ...sampleForm, message: e.target.value })}
                      required
                      className="form-textarea"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="form-submit" disabled={loadingSample}>
                    {loadingSample ? 'Sending...' : 'Request Sample'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to elevate your packaging? Contact us for a custom quote
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-info-title">Contact Information</h3>
              <div className="contact-items">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div>
                    <p className="contact-label">Email</p>
                    <p className="contact-value">info@customprintedbox.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div>
                    <p className="contact-label">Phone</p>
                    <p className="contact-value">0300 4316521</p>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <div>
                    <p className="contact-label">Location</p>
                    <p className="contact-value">Worldwide Delivery Available</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="contact-form-card">
              <CardContent className="contact-form-content">
                <form onSubmit={handleContactSubmit}>
                  <div className="form-group">
                    <Input
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <Textarea
                      placeholder="Your Message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                      className="form-textarea"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="form-submit" disabled={loadingContact}>
                    {loadingContact ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <Box className="footer-logo-icon" />
                <span>CustomPrintedBox</span>
              </div>
              <p className="footer-description">
                Premium custom printed card boxes with export quality.
                Worldwide delivery available.
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                <li>UV Coating</li>
                <li>Embossing</li>
                <li>Reverse Tuck</li>
                <li>Auto Tuck</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li>About Us</li>
                <li>Our Process</li>
                <li>Quality Standards</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Support</h4>
              <ul className="footer-links">
                <li>Contact Us</li>
                <li>Request Sample</li>
                <li>FAQs</li>
                <li>Shipping Info</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 CustomPrintedBox. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;