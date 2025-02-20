import React from 'react'
import { Link } from 'react-router-dom'

function Introduction() {
  return (
    <section className="container container-space video-intro" id="video-intro-section" aria-labelledby="video-intro-heading">
      <h2 id="video-intro-heading">Watch My Introduction</h2>
      <div className="video-thumbnail" role="button" tabIndex="0" aria-label="Play Intro Video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/N7XPHNIJRqE?si=fSWygYdM1KTZ29OS" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <div><Link to="/contact" className='btn btn-primary'>Let's Create Together</Link></div>
        {/* <img src="intro-video-thumbnail.jpg" alt="Intro Video" />
          <div className="play-button">▶</div> */}
      </div>


    </section>
  )
}

export default Introduction