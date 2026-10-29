import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from './PageBanner.jsx';
import bannerImg from '../assets/image/resources.jpg';
import workspaceImg from '../assets/image/workspace.jpg';
import cultureImg from '../assets/image/culture.jpg';
import growthImg from '../assets/image/growth.jpg';

const articles = [
  { img: workspaceImg, cat: 'PEOPLE OPERATIONS', title: 'A practical onboarding checklist', desc: 'A clear first-week plan to help new colleagues feel welcome and confident.', time: '6 min read' },
  { img: cultureImg, cat: 'CULTURE & WELLBEING', title: 'Make feedback part of the culture', desc: 'Small, regular conversations can create more trust than one annual review.', time: '4 min read' },
  { img: growthImg, cat: 'LEARNING', title: 'Build a simple learning plan', desc: 'Turn professional goals into small, manageable steps across the quarter.', time: '5 min read' }
];

export default function Resources() {
  return <main className="inner-page">
    <PageBanner eyebrow="THE HRLEAF JOURNAL" title="Ideas for a healthier workplace." text="Helpful guides and small practices for people teams who want work to feel more human." image={bannerImg} />
    <section className="container section-block resources-layout">
      <aside className="resource-aside"><div className="aside-mark"><i className="bi bi-journal-richtext" /></div><p className="eyebrow">A LITTLE INSPIRATION</p><h2>Good work grows from good habits.</h2><p>Explore practical ideas for hiring, culture, learning, and everyday people operations.</p><Link to="/contact" className="text-link">Suggest a topic <i className="bi bi-arrow-up-right" /></Link></aside>
      <div className="resource-list">{articles.map(a => <article className="resource-card" key={a.title} data-aos="fade-up"><img src={a.img} alt="" className="resource-thumb" /><div><span className="job-type">{a.cat}</span><h3>{a.title}</h3><p>{a.desc}</p><span className="read-time"><i className="bi bi-clock" /> {a.time}</span></div></article>)}</div>
    </section>
  </main>;
}