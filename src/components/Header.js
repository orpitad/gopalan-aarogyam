import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">Gopalan Aarogyam</Link>
          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
            <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Our Services</Link></li>
            <li><Link to="/lab-test" className={location.pathname === '/lab-test' ? 'active' : ''}>Lab Test</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;