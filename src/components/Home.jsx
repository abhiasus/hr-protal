import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/image/hero.jpg';
import cultureImg from '../assets/image/culture.jpg';
import growthImg from '../assets/image/growth.jpg';
import teamImg from '../assets/image/team.jpg';
import partnersImg from '../assets/image/partners.jpg';
import service1 from '../assets/image/service-1.jpg';
import service2 from '../assets/image/service-2.jpg';
import service3 from '../assets/image/service-3.jpg';

const services = [
  { img: service1, icon: 'bi-person-plus', title: 'Recruitment & Onboarding', text: 'Welcome the right people with a clear and thoughtful hiring journey.' },
  { img: service2, icon: 'bi-people', title: 'Employee Management', text: 'Keep employee information, attendance, and team processes in one place.' },
  { img: service3, icon: 'bi-mortarboard', title: 'Learning & Development', text: 'Help people build confidence, skills, and a path toward their next goal.' }
];

export default function Home() {
  return <main>
    <section className="hero-wrap">
      <div className="container hero-grid">
        <div className="hero-copy" data-aos="fade-up">
          <p className="eyebrow">HUMAN RESOURCES, WITH HEART</p>
          <h1>People, Culture,<br /><em>Growth.</em></h1>
          <p className="hero-description">Thoughtful HR tools that help teams grow, build trust, and make work feel more human.</p>
          <div className="hero-actions">
            <Link className="btn-main" to="/services">Explore the Portal <i className="bi bi-arrow-up-right" /></Link>
            <Link className="btn-quiet" to="/about">Our Approach</Link>
          </div>
          <div className="hero-proof">
            <div><strong>500+</strong><span>People supported</span></div>
            <div><strong>120+</strong><span>Partner teams</span></div>
            <div><strong>98%</strong><span>Positive feedback</span></div>
          </div>
        </div>
        <div className="hero-art" data-aos="fade-left">
          <div className="hero-photo"><img src={heroImg} alt="Happy HR team working together" /></div>
          <div className="hero-badges">
            <div className="leaf-card"><span>PEOPLE. PURPOSE. PROGRESS.</span><strong>Better work starts here.</strong></div>
            <div className="leaf-note"><i className="bi bi-heart-fill" /> Grow together</div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-block">
      <div className="container">
        <div className="section-heading" data-aos="fade-up"><p className="eyebrow">WHAT WE CULTIVATE</p><h2>People-first support, naturally.</h2><p>Practical HR services, grounded in care and built for everyday work.</p></div>
        <div className="row g-4 mt-2">
          {services.map((s, i) => <div className="col-md-4" key={s.title} data-aos="fade-up" data-aos-delay={i * 100}>
            <article className="service-card has-img"><img src={s.img} alt={s.title} className="card-img" /><div className="service-icon"><i className={`bi ${s.icon}`} /></div><h3>{s.title}</h3><p>{s.text}</p><Link to="/services" className="text-link">Discover more <i className="bi bi-arrow-up-right" /></Link></article>
          </div>)}
        </div>
      </div>
    </section>

    <section className="container section-block pt-0">
      <div className="feature-split">
        <div className="feature-images" data-aos="fade-right"><img src={cultureImg} alt="Team culture" /><img src={growthImg} alt="Growth" /></div>
        <div className="feature-copy" data-aos="fade-left"><p className="eyebrow">OUR CULTURE</p><h2>Where good ideas take root.</h2><p className="muted-copy">We help teams build habits of trust, feedback, and learning, so every person has room to grow and do their best work.</p><Link to="/about" className="btn-main">Learn more <i className="bi bi-arrow-up-right" /></Link></div>
      </div>
    </section>

    <section className="quote-section"><div className="container quote-inner" data-aos="fade-up"><span className="quote-mark">“</span><p>When people feel supported, good work has room to grow.</p><span className="quote-credit">THE HRLEAF WAY</span></div></section>

    <section className="container section-block">
      <div className="feature-split reverse">
        <div className="feature-copy" data-aos="fade-right"><p className="eyebrow">TRUSTED PARTNERS</p><h2>Growing with 120+ teams.</h2><p className="muted-copy">From startups to established companies, teams rely on HRLeaf for simple, caring people operations.</p></div>
        <div className="feature-images single" data-aos="fade-left"><img src={partnersImg} alt="Partnership handshake" /><img src={teamImg} alt="Our team" /></div>
      </div>
    </section>

    <section className="cta-strip"><div className="container cta-inner"><div><p className="eyebrow">LET’S GROW SOMETHING GOOD</p><h2>Make room for better work.</h2></div><Link className="btn-main" to="/contact">Talk to our team <i className="bi bi-arrow-up-right" /></Link></div></section>
  </main>;
}