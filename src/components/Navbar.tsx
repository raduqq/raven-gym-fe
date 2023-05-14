import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Hide the navbar on the login page
  const hideNavbar = location.pathname === "/login";

  // You can customize the navbar appearance and content here
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${
        hideNavbar ? "d-none" : ""
      }`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/disciplines">
                Disciplines
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
