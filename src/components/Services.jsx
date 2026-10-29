import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from './PageBanner.jsx';
import bannerImg from '../assets/image/services.jpg';
import s1 from '../assets/image/service-1.jpg';
import s2 from '../assets/image/service-2.jpg';
import s3 from '../assets/image/service-3.jpg';
import s4 from '../assets/image/service-4.jpg';
import s5 from '../assets/image/service-5.jpg';
import s6 from '../assets/image/service-6.jpg';

const services = [
  { img: s1, icon: 'bi-person-plus', title: 'Recruitment & Onboarding', text: 'Plan hiring steps, coordinate interviews, and help new hires feel welcome from day one.' },
  { img: s2, icon: 'bi-people', title: 'Employee Management', text: 'Keep profiles, policies, attendance details, and employee records easy to find.' },
  { img: s3, icon: 'bi-mortarboard', title: 'Learning & Development', text: 'Support training plans, skill-building, and meaningful career conversations.' },
  { img: s4, icon: 'bi-calendar2-check', title: 'Attendance & Leave', text: 'Make time-off requests and attendance workflows more transparent.' },
  { img: s5, icon: 'bi-clipboard-data', title: 'Performance Support', text: 'Create regular check-ins and keep goals visible across the team.' },
  { img: s6, icon: 'bi-chat-heart', title: 'Employee Wellbeing', text: 'Listen to feedback and create a more thoughtful, connected workplace.' }
];

export default function Services() {
  return <main className="inner-page">
    <PageBanner eyebrow="OUR SERVICES" title="Support for every stage of work." text="Thoughtful services for people teams who want work to feel more human." image={bannerImg} />
    <section className="container section-block"><div className="row g-4">
      {services.map((s, i) => <div className="col-md-6 col-lg-4" key={s.title} data-aos="fade-up" data-aos-delay={(i % 3) * 80}>
        <article className="service-card service-card-large has-img"><img src={s.img} alt={s.title} className="card-img" /><div className="service-icon"><i className={`bi ${s.icon}`} /></div><h3>{s.title}</h3><p>{s.text}</p><span className="service-number">0{i + 1}</span></article>
      </div>)}
    </div></section>
    <section className="cta-strip"><div className="container cta-inner"><div><p className="eyebrow">NEED A LITTLE SUPPORT?</p><h2>Let’s help your people thrive.</h2></div><Link className="btn-main" to="/contact">Contact HR <i className="bi bi-arrow-up-right" /></Link></div></section>
  </main>;
}