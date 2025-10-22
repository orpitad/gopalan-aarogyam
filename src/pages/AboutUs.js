import React from 'react';

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #1e3a6b, #0d1f3d)' }}>
        <div className="container">
          <h1>About Gopalan Aarogyam</h1>
          <p>Excellence in Healthcare Since Our Foundation</p>
        </div>
      </section>

      {/* About Content */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Story</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Gopalan Aarogyam has been at the forefront of providing exceptional healthcare services 
              to our community. Founded with a vision to make quality healthcare accessible to all, 
              we have grown into a trusted medical institution known for our commitment to excellence 
              and patient-centered care.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Our team of dedicated healthcare professionals works tirelessly to ensure that every 
              patient receives the highest standard of medical care in a compassionate and 
              supportive environment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-light">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To provide comprehensive, high-quality healthcare services that improve the health 
                 and well-being of our patients through innovative medical practices and compassionate care.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>To be the leading healthcare provider recognized for excellence in patient care, 
                 medical innovation, and community health improvement.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💎</div>
              <h3>Our Values</h3>
              <p>Compassion, Excellence, Integrity, Innovation, and Patient-Centered Care guide 
                 everything we do at Gopalan Aarogyam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Leadership</h2>
            <p>Meet the experts behind our success</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">👨‍⚕️</div>
              <h3>Dr. John Smith</h3>
              <p>Chief Medical Officer</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>20+ years of experience in internal medicine</p>
            </div>
            <div className="service-card">
              <div className="service-icon">👩‍⚕️</div>
              <h3>Dr. Sarah Johnson</h3>
              <p>Head of Laboratory Services</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Specialized in diagnostic medicine</p>
            </div>
            <div className="service-card">
              <div className="service-icon">👨‍💼</div>
              <h3>Michael Brown</h3>
              <p>Hospital Administrator</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Healthcare management expert</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;