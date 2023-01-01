import React from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            aria-current="page"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={-100}
            className="navbar-brand txtportfolio active"
            href=""
          >
            PortFolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={-100}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={-100}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="service"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={-100}
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={-100}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={-100}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
