import React, { useEffect } from 'react';
import Logo from '../../assets/images/logo.png';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    // Load Bootstrap Collapse script manually (optional if already loaded)
    // import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarToggler.classList.contains('show')) {
      // Bootstrap collapse toggle
      const collapse = new window.bootstrap.Collapse(navbarToggler, {
        toggle: false,
      });
      collapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="d-none sr-only">TheCodeRides</span>
          <img src={Logo} alt="Website Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={handleNavLinkClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={handleNavLinkClick}>
                About me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={handleNavLinkClick}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio" onClick={handleNavLinkClick}>
                Portfolio
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
