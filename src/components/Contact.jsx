import React, { useState } from 'react';
import PageBanner from './PageBanner.jsx';
import contactImg from '../assets/image/contact.jpg';
import officeImg from '../assets/image/contact-office.jpg';
import mapImg from '../assets/image/contact-map.jpg';
import supportImg from '../assets/image/support.jpg';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event) { event.preventDefault(); setSubmitted(true); }
  return <main className="inner-page">
    <PageBanner eyebrow="CONTACT HRLEAF" title="Start a conversation." text="Questions, ideas, or a people challenge? We would love to hear from you." image={contactImg} />
    <section className="container section-block contact-layout">
      <div className="contact-details" data-aos="fade-right"><p className="eyebrow">WE’RE HERE TO HELP</p><h2>A little conversation can help a lot.</h2><p className="muted-copy">Reach out to our people support team. We usually respond within one business day.</p>
        <div className="contact-method"><i className="bi bi-envelope" /><div><strong>Email us</strong><span>hello@hrleaf.example</span></div></div>
        <div className="contact-method"><i className="bi bi-clock" /><div><strong>Office hours</strong><span>Monday–Friday, 9:00 AM–6:00 PM</span></div></div>
        <div className="contact-method"><i className="bi bi-geo-alt" /><div><strong>Visit us</strong><span>Bengaluru, Karnataka, India</span></div></div>
        <img src={officeImg} alt="HRLeaf office" className="contact-photo" />
      </div>
      <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left"><div className="form-heading"><h2>Send us a message</h2><p>Fields marked with * are required.</p></div>
        {submitted && <div className="form-success"><i className="bi bi-check-circle-fill" /> Demo form submitted. Connect a backend to send messages.</div>}
        <div className="row g-3">
          <div className="col-sm-6"><label htmlFor="name">Full name *</label><input id="name" name="name" required placeholder="Your name" /></div>
          <div className="col-sm-6"><label htmlFor="email">Email address *</label><input id="email" name="email" type="email" required placeholder="you@example.com" /></div>
          <div className="col-12"><label htmlFor="topic">What can we help with?</label><select id="topic" name="topic"><option>General enquiry</option><option>Recruitment & onboarding</option><option>Employee management</option><option>Learning & development</option></select></div>
          <div className="col-12"><label htmlFor="message">Message *</label><textarea id="message" name="message" rows="4" required placeholder="Tell us a little about your needs..." /></div>
          <div className="col-12"><button className="btn-main" type="submit">Send message <i className="bi bi-arrow-up-right" /></button></div>
        </div>
      </form>
    </section>
    <section className="container section-block pt-0 contact-extra">
      <img src={mapImg} alt="Map of Bengaluru" data-aos="fade-up" />
      <img src={supportImg} alt="HR support team" data-aos="fade-up" data-aos-delay="100" />
    </section>
  </main>;
}