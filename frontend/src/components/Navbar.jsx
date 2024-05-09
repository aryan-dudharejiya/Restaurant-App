import React from "react";
import { Link, useLocation } from "react-router-dom";

// Navbar component
const Navbar = ({ loggedIn, handleSignOut }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    // Navbar with dynamic background color based on location
    <nav className={`navbar navbar-expand-lg ${isHomePage ? "navbar-light bg-transparent" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
        {/* Navbar brand/logo */}
        <Link className={`navbar-brand ${isHomePage ? "text-dark" : "text-dark"}`} to="/">
          Take It Cheesy
        </Link>
        {/* Navbar toggle button */}
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
        {/* Navbar links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {/* Nav items */}
            <li className="nav-item">
              <Link className={`nav-link ${isHomePage ? "text-dark" : "text-dark"}`} to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isHomePage ? "text-dark" : "text-dark"}`} to="/team">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isHomePage ? "text-dark" : "text-dark"}`} to="/reservation">
                Reservation
              </Link>
            </li>
            {/* Conditional rendering based on login state */}
            {loggedIn ? (
              <button
                className={`btn ${isHomePage ? "btn-dark text-light" : "btn-dark text-light"}`}
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/login"
                className={`btn ${isHomePage ? "btn-dark text-light" : "btn-dark text-light"}`}
              >
                Sign In
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
