import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Achievements.css";

const achievementsData = [
  { year: "2024", title: "Web Development with Accessibility Best Practices", description: "Simplifying Web Development with Accessibility Best Practices course." },
  { year: "2024", title: "Best UI Designer Award", description: "Recognized for outstanding UI/UX design contributions for Keenan Project." },
  { year: "2023", title: "Certified Front-End Developer", description: "Completed  certification in React development." },
  { year: "2019 - 2024", title: "50+ Projects Delivered", description: "Successfully developed and designed 50+ web applications." },
  { year: "2021", title: "Speaker at TechConf", description: "Presented insights on UI/UX trends at an international tech event." },
];

const Achievements = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadPDF = () => {
    setDownloading(true);
    setTimeout(() => {
      alert("Achievements PDF Downloaded!");
      setDownloading(false);
    }, 2000);
  };

  return (
    <section className="container container-space achievements" id="achievements-section" aria-labelledby="achievements-heading">
      <h2 id="achievements-heading">Achievements & Awards</h2>
      <div className="achievements-container">
        <div className="timeline">
          {achievementsData.map((achievement, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-year">{achievement.year}</div>
              <div className="timeline-content">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.button
        className="download-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleDownloadPDF}
        disabled={downloading}
      >
        {downloading ? "Downloading..." : "📄 Download Achievements PDF"}
      </motion.button> */}
      </div></section>
  );
};

export default Achievements;
