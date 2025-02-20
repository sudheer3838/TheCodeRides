import React from 'react'

function CareerTimeline() {
  return (
    <section className="container container-space   timeline" id="timeline-section" aria-labelledby="timeline-heading">
    <h2 id="timeline-heading">Experience & Work Journey</h2>
    <div className="timeline-container">
      <div className="timeline-item" data-aos="fade-up" aria-live="polite">
        <h4>RSA Tech | UI/UX Designer & Developer</h4>
        <p>Aug 2023 - Present · 1 yr 6 mos | Sr. UI Designer/Developer/Frontend developer | Agile, Team Management, CSS/CSS 3, Figma, Site Core CMS, PSD/Figma to HTML 5, Saas/Less, WCAG, W3C, Responsive, PWA,RWD, JavaScripit Framework, BEM</p>
      </div>
      <ul className="list-unstyled">
        <li>
          <div className="timeline-item" data-aos="fade-up" aria-live="polite">
            <h4>KiwiTech</h4>
            <p>
              Full-time · 12 yrs 7 mosFull-time · 12 yrs 7 mos..
            </p>
          </div>
          <ul className='list-unstyled pl-5'>
            <li>
              <div className="timeline-item" data-aos="fade-up" aria-live="polite">
                <h4>KiwiTech | <small>Associate Tech Lead</small></h4>
                <p>Team Management, Develop new user-facing features, Optimize application for maximum speed and scalability
                  Assure that all user input is validated before submitting to back-end</p>
              </div>
            </li>
            <li>
              <div className="timeline-item" data-aos="fade-up" aria-live="polite">
                <h4>Senior Web Designer</h4>
                <p>Sep 2018 - Aug 2021 · 3 yrs | Develop new user-facing features
                  Build reusable code and libraries for future use
                  Ensure the technical feasibility of UI/UX designs
                  Optimize application for maximum speed and scalability</p>
              </div>
            </li>
            <li>
              <div className="timeline-item" data-aos="fade-up" aria-live="polite">
                <h4>Web Designer | HTML & HTML 5</h4>
                <p>Sep 2015 - Aug 2018 · 3 yrs | Develop new user-facing features, Build reusable code and libraries for future use, Ensure the technical feasibility of UI/UX designs. Optimize application for maximum speed and scalability
                  Assure that all user input is validated before submitting to back-end
                  Collaborate with other team members and stakeholders</p>
              </div>
            </li>
            <li>
              <div className="timeline-item" data-aos="fade-up" aria-live="polite">
                <h4>Content Developer for ebook and Apps</h4>
                <p>Dec 2010 - Aug 2015 · 4 yrs 9 mos | Creating ebook, epaper, kindle books & ePub using HTML, CSS and PDF.</p>
              </div>
            </li>


          </ul>
        </li>
      </ul>
    </div>
  </section>      

  )
}

export default CareerTimeline