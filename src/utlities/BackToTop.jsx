import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"; // Import Framer Motion

function BackToTop() {
	const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setIsScrollTopVisible(window.scrollY > 200);
		});

		// Apply dark mode based on local storage preference
		// const savedDarkMode = localStorage.getItem("darkMode") === "true";
		// setDarkMode(savedDarkMode);
	}, []);
	return (
		<>
			{/* Scroll to Top Button */}
			{isScrollTopVisible && (
				<motion.button className="scroll-top" onClick={() => window.scrollTo(0, 0)} whileHover={{ scale: 1.1 }}>
					⬆ Scroll to Top
				</motion.button>
			)}

		</>
	)
}

export default BackToTop