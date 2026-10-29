import React from 'react';
import Logo from './Logo.jsx';

export default function PageBanner({ eyebrow, title, text, image }) {
  return <section className="page-banner">
    <div className="container banner-grid">
      <div className="banner-copy">
        <Logo className="banner-logo" />
        <p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p>
      </div>
      <img src={image} alt="" className="banner-img" />
    </div>
  </section>;
}