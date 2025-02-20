import React from 'react'
import facebookIcon from '../../assets/images/social-media-icon/facebook-icon.svg'
import twitterIcon from '../../assets/images/social-media-icon/twitter-icon.svg'
import linkedinIcon from '../../assets/images/social-media-icon/linkedin-icon.svg'
import instagramIcon from '../../assets/images/social-media-icon/instagram-icon.svg'
import whatsappIcon from '../../assets/images/social-media-icon/whatsappIcon.svg'
import phoneIcon from '../../assets/images/social-media-icon/phoneCall.svg'
function SocialMedia() {
  return (
    <div className="social-media-link">
      <nav aria-label="Social Media Links">
        <ul className="social-links list-unstyled">
          <li>
            <a href="https://www.facebook.com/sudhirdixit007" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
              <span className="sr-only">Facebook</span>
              <img src={facebookIcon} alt="Facebook Icon" width="32" height="32" />
            </a>
          </li>
          <li>
            <a href="https://x.com/sudhirdixit007" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
              <span className="sr-only">Twitter</span>
              <img src={twitterIcon} alt="Twitter Icon" width="32" height="32" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sudhirdixit007" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
              <span className="sr-only">Instagram</span>
              <img src={instagramIcon} alt="Instagram Icon" width="24" height="24" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sudheerdixit/" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
              <span className="sr-only">LinkedIn</span>
              <img src={linkedinIcon} alt="LinkedIn Icon" width="32" height="32" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/919311680707" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
              <span className="sr-only">WhatsApp</span>
              <img src={whatsappIcon} alt="WhatsApp Icon" width="24" height="24" />
            </a>
          </li>
          <li>
            <a href="tel:+919311680707" aria-label="Call us">
              <span className="sr-only">Call Us</span>
              <img src={phoneIcon} alt="Phone Icon" width="24" height="24" />
            </a>
          </li>
        </ul>
      </nav>
    </div>

  )
}

export default SocialMedia