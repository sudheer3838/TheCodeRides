import React from 'react'
import { motion } from "framer-motion"; // Import Framer Motion
import SocialMedia from '../../../utlities/SocialMedia/SocialMedia';

function Welcome() {
  return (
    <header className="portifolio-header">
      {/* <img class="profile-background-image" alt="Background Image" src="https://media.licdn.com/dms/image/v2/D5616AQECRCucS-3YbA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1725727999534?e=1744848000&amp;v=beta&amp;t=3JDWzMIzxJwDRI1cvWXSZ0UBpoKw5-5xA94eUWqQMEc" /> */}
      
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        I'm Sudheer,<br />A Frontend Developer & UI/UX Designer
      </motion.h1>
      <p className='fs-18'>With 12+ years in IT and 6+ years in UI/UX Development & Designing ...</p>
      <SocialMedia />

      


      {/* <motion.div className="sticky-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <a href="SudheerDixit.pdf" download className="download-resume">📄 Download Resume</a>
        <a href="tel:+919311680707" className="call-me">📞 Call Me</a>
      </motion.div> */}
    </header>
  )
}

export default Welcome