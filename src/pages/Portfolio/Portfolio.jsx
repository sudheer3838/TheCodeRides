import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Portfolio.css"; // Import the CSS file
import Experience from '../../components/Experience/Experience'
import Testimonials from '../About/Testimonials/Testimonials'
import ProjectsList from '../../components/ProjectsList/ProjectsList'
import Welcome from './Welcome/Welcome'
import PortfolioFilter from "./PortfolioFilter/PortfolioFilter";


const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  // const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setIsScrollTopVisible(window.scrollY > 200);
  //   });

  //   // Apply dark mode based on local storage preference
  //   const savedDarkMode = localStorage.getItem("darkMode") === "true";
  //   setDarkMode(savedDarkMode);
  // }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };


  return (
    <div className={`app ${darkMode ? "dark" : "light"}`} role="document">
      {/* SEO Meta Tags */}
      <meta name="description" content="Portfolio of a UI Developer & UX Designer" />
      <meta name="keywords" content="UI Developer, UX Designer, Web Design, React" />
      <meta name="author" content="UI Developer, UX Designer, Web Design, React" />

      {/* Skip Navigation */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Welcome />

      {/* Portfolio Section */}
      <PortfolioFilter />
      {/* <ProjectsList /> */}
    </div>
  );
};

export default Portfolio;
