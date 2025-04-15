import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"; // Import Framer Motion
import './About.css';
import experienceBg from '../../assets/images/experience-bg.png'
import profile from '../../assets/images/profile/smallSize.jpg'
import skillData from '../../data/Aboutme'
import Achievements from './Achievements/Achievements';
import Testimonials from './Testimonials/Testimonials'
import SocialMedia from '../../utlities/SocialMedia/SocialMedia'
import Introduction from './Introduction/Introduction'
import CareerTimeline from './CareerTimeline/CareerTimeline'
import { Link } from 'react-router-dom';
import FeaturedProject from '../../components/FeaturedProjects/FeaturedProject';
import HireMeModal from './HireMeModal/HireMe';
import FeedBackModal from './Feedback/FeedBack';
const About = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().getHours());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skills, setSkills] = useState([])


  // Theme toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  // Dynamic greeting based on time
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') setDarkMode(true);
    setSkills(skillData)
  }, []);


  const greeting = currentTime < 12 ? 'Good Morning' : currentTime < 18 ? 'Good Afternoon' : 'Good Evening';

  // Modal toggle
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className={`about ${darkMode ? 'dark' : 'light'}`} role="document">
      {/* Skip Navigation Link */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Header */}
      <header className="header" aria-labelledby="hero-heading">
        <img src={experienceBg} className="d-block experience-banner" alt="Experience Section Banner Image" />
        <motion.div className="box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <motion.div className="profileImagebox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            <img src={profile} alt="profile Image" />
          </motion.div>
          <motion.div className='greeting' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            {greeting}
          </motion.div>
          <motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} transition={{ duration: 2.5 }}>
            <h1 id="hero-heading">I'm Sudheer Dixit, <br />A Frontend Developer & UI/UX Designer</h1>
            <p className='mb-0'>A Front-End Developer & UI/UX Designer crafting immersive digital experiences.</p>
            <p>Specializing in beautiful and accessible web experiences.</p>
            <div className="btn-wrap">
              {/* <Link className='btn-primary downloadResume' to={'/about'}>Download Resume</Link> */}
              <Link className='btn-primary downloadResume' to={'https://drive.google.com/file/d/1BbE1DDbWO3CfgP1pgVjSTUhh-nyr5L4z/view?usp=sharing'} target="_blank">
                Download Resume
              </Link>
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#hireMeModal"
              >
                Hire Me
              </button>
              <button class="feedback-button" data-bs-toggle="modal"
                data-bs-target="#FeedBackModal">Give Feedback</button>

             
            </div>
          </motion.div>
          <SocialMedia />
        </motion.div>
        <button
          onClick={toggleDarkMode}
          className="theme-toggle"
          aria-label={`Switch to ${darkMode ? 'Light' : 'Dark'} Mode`}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      <HireMeModal />
      <FeedBackModal />
      <section className='container container-space carrier-points'>
        <div className="achievement-container">

          <div className="achievement-item">
            <div className="achievement-circle" style={{}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              <span className="box-white">12+</span>
            </div>
            <p>12+ Years Experience in IT/Software</p>
          </div>
          <div className="achievement-item">
            <div className="achievement-circle" style={{}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              <span className="box-white">6+ Years</span>
            </div>
            <p>6+ in UI/UX Development</p>
          </div>
          <div className="achievement-item">
            <div className="achievement-circle" style={{}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              <span className="box-white">10+ Brands</span>
            </div>
            <p>10+ Brands Across Industries</p>
          </div>
          <div className="achievement-item">
            <div className="achievement-circle" style={{}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              <span className="box-white">50+ Projects</span>
            </div>
            <p>50+ Successful Projects Delivered.</p>
          </div>
        </div>

      </section>


      {/* Skills Section */}
      <section className="container container-space skills" id="skills-section" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Skills & Expertise</h2>
        <div className="row">
          <div className="col-lg-12">
            {
              skills.map((skill, Index) => (
                <div key={Index} className="progress-bar-container" aria-live="polite">
                  {skill.primarySkills.map((item, Index) => (
                    <div key={Index} className="progress-bar" style={{ width: `${item.selfRating}%` }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                      <span>{item.tech}</span>
                      <span className="rating">{item.selfRating}%</span>
                    </div>
                  ))}
                </div>
              ))
            }
          </div>
        </div>


      </section>

      <Testimonials />
      <CareerTimeline />
      <Achievements />
      <Introduction />
      <section className="container-space">
        <FeaturedProject />
      </section>
    </div>
  );
};

export default About;
