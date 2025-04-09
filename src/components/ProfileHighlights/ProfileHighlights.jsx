// ProfileHighlights.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLightbulb, FaUniversalAccess } from 'react-icons/fa';
import './ProfileHighlights.css';

const cards = [
  {
    id: 1,
    title: 'Who I Am',
    icon: <FaUser />,
    content: `Passionate Frontend Developer & UI/UX Designer with 6+ years of experience building clean, scalable, and accessible digital experiences.`,
  },
  {
    id: 2,
    title: 'What I Do',
    icon: <FaLightbulb />,
    content: (
      <ul>
        <li>→ React.js & Firebase for dynamic UIs</li>
        <li>→ WCAG-compliant HTML/CSS</li>
        <li>→ API & JSON-based workflows</li>
        <li>→ SEO, performance & mobile-first design</li>
      </ul>
    ),
  },
  {
    id: 3,
    title: 'Why It Matters',
    icon: <FaUniversalAccess />,
    content: `I believe accessibility is a right — not a feature. I build inclusive web experiences that ensure everyone can access and interact with content, regardless of ability.`,
  },
];

const ProfileHighlights = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section className="profile-highlights" aria-labelledby="profile-heading">
      <h2 id="profile-heading" className="visually-hidden">Profile Highlights</h2>
      <div className="highlight-grid">
        {cards.map(({ id, title, icon, content }) => (
          <motion.article
            key={id}
            className={`highlight-box ${activeCard === id ? 'active' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: id * 0.1 }}
            viewport={{ once: true }}
            role="button"
            aria-expanded={activeCard === id}
            tabIndex={0}
            onClick={() => toggleCard(id)}
            onKeyDown={(e) => (e.key === 'Enter' ? toggleCard(id) : null)}
          >
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            {activeCard === id && (
              <div className="content">
                {typeof content === 'string' ? <p>{content}</p> : content}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProfileHighlights;
