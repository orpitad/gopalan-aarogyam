import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Gopalan Aarogyam</h3>
            <p>Providing comprehensive healthcare services with compassion and excellence.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/lab-test">Lab Test</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Email: info@dmettleclinique.com</p>
            <p>Phone: +1 234 567 8900</p>
            <p>Address: 123 Healthcare St, Medical City</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Gopalan Aarogyam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;