import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader-overlay" role="status" aria-live="polite">
      <div className="loader-content">
        <div className="loader-logo">🚀</div>
        <h1 className="loader-title">Loading Your Experience...</h1>
        <p className="loader-subtext">Please wait while we fetch the magic.</p>
        <div className="loader-spinner"></div>
      </div>
    </div>
  )
}

export default Loader
