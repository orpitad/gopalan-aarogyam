import React from 'react';

const OurServices = () => {
  const services = [
    {
      icon: '🩺',
      title: 'General Consultation',
      description: 'Comprehensive medical consultations with our expert physicians for all your health concerns.',
      features: ['Routine Check-ups', 'Health Screening', 'Chronic Disease Management']
    },
    {
      icon: '💉',
      title: 'Laboratory Services',
      description: 'Advanced diagnostic testing and screening services with accurate and timely results.',
      features: ['Blood Tests', 'Urine Analysis', 'Microbiology Tests', 'Pathology Services']
    },
    {
      icon: '🏥',
      title: 'Specialized Care',
      description: 'Expert care from specialists in various medical fields for complex health conditions.',
      features: ['Cardiology', 'Dermatology', 'Gastroenterology', 'Neurology']
    },
    {
      icon: '🦷',
      title: 'Dental Care',
      description: 'Complete dental health services including preventive, restorative, and cosmetic dentistry.',
      features: ['Dental Check-ups', 'Teeth Cleaning', 'Fillings', 'Root Canal Treatment']
    },
    {
      icon: '👁️',
      title: 'Eye Care',
      description: 'Comprehensive eye examination and treatment services for all vision-related issues.',
      features: ['Eye Examination', 'Vision Testing', 'Cataract Screening', 'Glaucoma Testing']
    },
    {
      icon: '🩻',
      title: 'Imaging Services',
      description: 'State-of-the-art diagnostic imaging services for accurate diagnosis and treatment planning.',
      features: ['X-Ray', 'Ultrasound', 'CT Scan', 'MRI']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #ff6b35, #e55a2b)' }}>
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive Healthcare Solutions for Every Need</p>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Healthcare Services</h2>
            <p>We offer a wide range of medical services to meet all your healthcare needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Emergency Services</h2>
            <p>24/7 emergency medical care when you need it most</p>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="service-icon">🚑</div>
            <h3 style={{ marginBottom: '1rem' }}>Round-the-Clock Emergency Care</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our emergency department is staffed with experienced medical professionals 
              and equipped with advanced life-saving equipment to handle all types of 
              medical emergencies. We provide immediate care for critical conditions, 
              accidents, and urgent medical needs.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <button className="cta-button">Emergency Hotline: +1 234 567 8900</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;