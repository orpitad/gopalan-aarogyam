import React from 'react';

const LabTest = () => {
  const labTests = [
    {
      category: 'Blood Tests',
      tests: [
        'Complete Blood Count (CBC)',
        'Blood Glucose Test',
        'Lipid Profile',
        'Liver Function Test',
        'Kidney Function Test',
        'Thyroid Function Test'
      ]
    },
    {
      category: 'Urine Tests',
      tests: [
        'Urinalysis',
        'Urine Culture',
        'Microalbuminuria Test',
        'Pregnancy Test'
      ]
    },
    {
      category: 'Hormone Tests',
      tests: [
        'Thyroid Panel',
        'Testosterone Level',
        'Estrogen Level',
        'Cortisol Level',
        'Growth Hormone Test'
      ]
    },
    {
      category: 'Infectious Disease Tests',
      tests: [
        'HIV Test',
        'Hepatitis Panel',
        'COVID-19 Test',
        'STD Screening',
        'Tuberculosis Test'
      ]
    },
    {
      category: 'Cancer Screening',
      tests: [
        'PSA Test (Prostate)',
        'CA-125 (Ovarian)',
        'CEA (Colorectal)',
        'Pap Smear',
        'Mammogram'
      ]
    },
    {
      category: 'Genetic Tests',
      tests: [
        'Carrier Screening',
        'Prenatal Screening',
        'Pharmacogenetic Testing',
        'Hereditary Cancer Testing'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #2c5aa0, #1e3a6b)' }}>
        <div className="container">
          <h1>Laboratory Tests</h1>
          <p>Accurate Diagnostics for Better Healthcare Decisions</p>
        </div>
      </section>

      {/* Lab Services Intro */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Comprehensive Laboratory Services</h2>
            <p>State-of-the-art diagnostic testing with precision and accuracy</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Our modern laboratory is equipped with advanced technology and staffed by 
              experienced professionals to provide reliable and timely test results. We 
              offer a comprehensive range of diagnostic tests to help in early detection, 
              diagnosis, and monitoring of various health conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Tests Categories */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Available Tests</h2>
            <p>Browse our comprehensive list of laboratory tests</p>
          </div>
          <div className="services-grid">
            {labTests.map((category, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">🔬</div>
                <h3>{category.category}</h3>
                <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                  {category.tests.map((test, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                      • {test}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Preparation */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Test Preparation Guidelines</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Fasting Requirements</h3>
              <p>Some tests require fasting for 8-12 hours before the test. 
                 Please follow your doctor's instructions regarding fasting.</p>
            </div>
            <div className="service-card">
              <h3>Medication Instructions</h3>
              <p>Inform your doctor about all medications you are taking. 
                 Some medications may need to be temporarily stopped before testing.</p>
            </div>
            <div className="service-card">
              <h3>Timing Considerations</h3>
              <p>Certain tests are time-sensitive. Follow the recommended timing 
                 for optimal test accuracy and results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Information */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Test Results</h2>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="service-icon">📋</div>
            <h3 style={{ marginBottom: '1rem' }}>Getting Your Results</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Test results are typically available within 24-48 hours. You can receive 
              your results through our secure patient portal, or schedule a follow-up 
              appointment with your doctor to discuss the results and next steps.
            </p>
            <button className="cta-button">Schedule Test Appointment</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabTest;