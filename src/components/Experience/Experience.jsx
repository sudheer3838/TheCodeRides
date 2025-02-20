import React, { useEffect, useRef, useState } from "react";
import experienceBg from "../../assets/images/experience-bg.png";
import breifCaseIcon from "../../assets/images/icons/breif-case.svg";
import brandIcon from "../../assets/images/icons/brand-icon.svg";
import handsBound from "../../assets/images/icons/hands-bound.svg";
import "./Experience.css";

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const counts = [
    { value: 6, text: "Years", suffix: "+", description: "UI/UX Development Across Industries" },
    { value: 10, text: "Brands", suffix: "+", description: "Spanning Multiple Industries" },
    { value: 50, text: "Projects", suffix: "+", description: "Delivering Impactful & Successful Projects" },
  ];
  const countRefs = useRef([]);

  // Scroll Observer to detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once animation is triggered
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter Animation Logic
  useEffect(() => {
    if (!isVisible) return;

    countRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const target = counts[index].value;
      let start = 0;
      const duration = 2000; // 2 seconds animation
      const increment = target / (duration / 16); // Adjust for frame rate

      const updateCounter = () => {
        start += increment;
        if (start < target) {
          ref.innerText = Math.ceil(start) + counts[index].suffix;
          requestAnimationFrame(updateCounter);
        } else {
          ref.innerText = target + counts[index].suffix;
        }
      };

      updateCounter();
    });
  }, [isVisible, counts]);

  return (
    <div className="experience-container" ref={sectionRef}>
      <img
        src={experienceBg}
        className="d-block experience-banner"
        alt="Experience Section Banner Image"
      />
      <div className={`experience-caption ${isVisible ? "animate" : ""}`}>
        {counts.map((item, index) => (
          <div key={index} className="box box--content">
            <span className="box-icon">
              <img
                src={[breifCaseIcon, brandIcon, handsBound][index]}
                className="d-block"
                alt="Icon"
              />
            </span>
            <h5>
              <strong ref={(el) => (countRefs.current[index] = el)}>0+</strong>
              <span>{item.description}</span>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
