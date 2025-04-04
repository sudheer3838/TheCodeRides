import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import notFoundAnimation from "./not-found.json";
import './NotFound.css'

const NotFound = () => {
  return (
    <main className="not-found-container" role="main" aria-labelledby="error-title">
      <div className="animation-wrapper" aria-hidden="true">
        <Lottie animationData={notFoundAnimation} loop={true} />
      </div>
      <h1 id="error-title" className="not-found-title">Page Not Found</h1>
      <p className="not-found-message">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="home-button" aria-label="Go to Homepage">
        Go to Homepage
      </Link>
    </main>
  );
};

export default NotFound;
