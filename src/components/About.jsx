import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from './PageBanner.jsx';
import aboutImg from '../assets/image/about.jpg';
import teamImg from '../assets/image/team.jpg';
import cultureImg from '../assets/image/culture.jpg';
import growthImg from '../assets/image/growth.jpg';
import workspaceImg from '../assets/image/workspace.jpg';

export default function About() {
  return <main className="inner-page">
    <PageBanner eyebrow="OUR ROOTS" title="A more human way to work." text="We believe healthy teams grow when people feel seen, supported, and ready to do meaningful work." image={teamImg} />
    <section className="container section-block split-section">
      <figure className="split-art" data-aos="fade-right"><img src={aboutImg} alt="People grow together" /><figcaption>Rooted in trust. Built for people.</figcaption></figure>
      <div className="split-copy" data-aos="fade-left"><p className="eyebrow">OUR STORY</p><h2>Work is better when people can flourish.</h2><p>HRLeaf brings everyday people operations into a calmer, clearer experience. We help teams build consistent processes without losing the personal connection that makes a workplace special.</p>
        <ul className="check-list"><li><i className="bi bi-check-circle-fill" /> People before process</li><li><i className="bi bi-check-circle-fill" /> Clarity with a human touch</li><li><i className="bi bi-check-circle-fill" /> Learning that keeps growing</li></ul>
        <Link to="/contact" className="btn-main">Let’s connect <i className="bi bi-arrow-up-right" /></Link>
      </div>
    </section>
    <section className="values-section"><div className="container"><div className="section-heading"><p className="eyebrow">WHAT WE BELIEVE</p><h2>Good work grows from good habits.</h2></div><div className="row g-3">
      <div className="col-md-4"><article className="value-card has-img"><img src={cultureImg} alt="Care" className="card-img" /><span>01</span><h3>Care</h3><p>Make people feel respected, supported, and included.</p></article></div>
      <div className="col-md-4"><article className="value-card has-img"><img src={workspaceImg} alt="Trust" className="card-img" /><span>02</span><h3>Trust</h3><p>Build transparent processes people can rely on.</p></article></div>
      <div className="col-md-4"><article className="value-card has-img"><img src={growthImg} alt="Growth" className="card-img" /><span>03</span><h3>Growth</h3><p>Help individuals and teams keep learning.</p></article></div>
    </div></div></section>
  </main>;
}