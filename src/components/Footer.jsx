import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

export default function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand">
        <Link className="brand brand-footer" to="/">
          <Logo />
          <span className="brand-copy"><strong>HRLeaf</strong><small>People grow here</small></span>
        </Link>
        <p>Thoughtful people operations for teams that want to grow well.</p>
      </div>
      <div className="footer-links"><strong>Discover</strong><Link to="/about">Our story</Link><Link to="/services">HR services</Link><Link to="/resources">Resources</Link></div>
      <div className="footer-links"><strong>Contact</strong><Link to="/contact">Contact HR</Link><a href="mailto:hello@hrleaf.example">hello@hrleaf.example</a><span>Bengaluru, India</span></div>
      <div className="footer-news"><strong>Let people flourish.</strong><p>Build a workplace where people and good ideas can take root.</p><Link className="footer-link-cta" to="/contact">Start a conversation <i className="bi bi-arrow-up-right" /></Link></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 HRLeaf. All rights reserved.</span><span>People. Purpose. Progress.</span></div>
  </footer>;
}