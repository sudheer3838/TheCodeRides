import React from 'react'

function Testimonials() {
  return (
    <section className="container container-space  testimonials" id="testimonials-section" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading">Testimonials</h2>
            <div className="testimonial-carousel" role="region" aria-live="polite">
                <div className="testimonial" aria-labelledby="testimonial1">
                    <p>"Great work on our project! I highly recommend Sudheer as a Sr. UI Developer with expertise in HTML, CSS, SCSS, Bootstrap, and Material Design."</p>
                    <span>- Ventract</span>
                </div>
                <div className="testimonial" aria-labelledby="testimonial2">
                    <p>"Amazing UI/UX work. Highly recommended."</p>
                    <span>- PowerAI</span>
                </div>
                <div className="testimonial" aria-labelledby="testimonial2">
                    <p>"Highly recommended. fantastic team player. He always willing to lend a hand, share his own knowledge, and collaborate with others to achieve common goals."</p>
                    <span>- Ajay</span>
                </div>
                <div className="testimonial" aria-labelledby="testimonial1">
                    <p>"Positive attitude and strong work ethic made him a valuable asset to the team."</p>
                    <span>- CodeWaala.com</span>
                </div>
                <div className="testimonial" aria-labelledby="testimonial2">
                    <p>"I highly recommend Sudheer for any position that requires a talented and dedicated lead. He have a proven track record of success and will undoubtedly be an asset to any organization fortunate enough to have him."</p>
                    <span>- Vipin | ourbeauty.com</span>
                </div>
                <div className="testimonial" aria-labelledby="testimonial2">
                    <p>"I had the pleasure of working alongside Sudhir at Kiwitech, where their exceptional talent in visual design truly made a profound impact on our projects and team morale."</p>
                    <span>- Map101.com</span>
                </div>
            </div>
        </section>
  )
}

export default Testimonials