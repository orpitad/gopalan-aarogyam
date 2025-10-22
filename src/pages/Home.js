import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to Gopalan Aarogyam</h1>
          <p>Your trusted partner in comprehensive healthcare solutions</p>
          <Link to="/services">
            <button className="cta-button">Explore Our Services</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Gopalan Aarogyam?</h2>
            <p>We are committed to providing exceptional healthcare services</p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">⚕️</div>
              <h3>Expert Medical Team</h3>
              <p>Highly qualified and experienced healthcare professionals</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔬</div>
              <h3>Advanced Technology</h3>
              <p>State-of-the-art medical equipment and facilities</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">❤️</div>
              <h3>Patient-Centered Care</h3>
              <p>Personalized treatment plans and compassionate care</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⏰</div>
              <h3>24/7 Emergency</h3>
              <p>Round-the-clock emergency medical services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Our Key Services</h2>
            <p>Comprehensive healthcare solutions for all your needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🩺</div>
              <h3>General Consultation</h3>
              <p>Expert medical consultations for all health concerns</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💉</div>
              <h3>Laboratory Tests</h3>
              <p>Comprehensive diagnostic and screening tests</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏥</div>
              <h3>Specialized Care</h3>
              <p>Specialized treatments and medical procedures</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services">
              <button className="cta-button">View All Services</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;