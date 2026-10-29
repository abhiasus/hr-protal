import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';

export default function Navbar() {
  return <header className="site-header">
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="brand" to="/">
          <Logo />
          <span className="brand-copy"><strong>HRLeaf</strong><small>People grow here</small></span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
          aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="bi bi-list" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <div className="navbar-nav ms-auto align-items-lg-center">
            <NavLink className="nav-link" to="/" end>Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/services">Services</NavLink>
            <NavLink className="nav-link" to="/resources">Resources</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            <Link className="nav-cta" to="/contact">Employee Login <i className="bi bi-arrow-up-right" /></Link>
          </div>
        </div>
      </div>
    </nav>
  </header>;
}