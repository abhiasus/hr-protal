import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Resources from './components/Resources.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const location = useLocation();
  useEffect(() => { AOS.init({ duration: 750, once: true, offset: 55 }); }, []);
  useEffect(() => { AOS.refresh(); window.scrollTo({ top: 0, behavior: 'smooth' }); }, [location.pathname]);
  return <>
    <Navbar />
    <div className="nav-hero-gap" aria-hidden="true" />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
    <Footer />
  </>;
}
