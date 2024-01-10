import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <main className="navbar-container">
        <a href="#" className="navbar-logo link">
          Portfolio
        </a>
        <ul className={`navbar-menu ${isMenuOpen ? "menu-active" : ""}`}>
          <li className="navbar-list-item">
            <a href="#" className="navbar-link link">
              <i className="uil uil-estate menu-icons"></i> Home
            </a>
          </li>
          <li className="navbar-list-item">
            <a href="#about" className="navbar-link link">
              <i className="uil uil-user menu-icons"></i> About
            </a>
          </li>
          <li className="navbar-list-item">
            <a href="#stack" className="navbar-link link">
              <i className="uil uil-file-network menu-icons"></i> Stack
            </a>
          </li>
          <li className="navbar-list-item">
            <a href="#project" className="navbar-link link">
              <i className="uil uil-bag menu-icons"></i> Project
            </a>
          </li>
          <li className="navbar-list-item">
            <a href="#contact" className="navbar-link link">
              <i className="uil uil-phone menu-icons"></i> Contact
            </a>
          </li>
          <i
            className="uil uil-times navbar-close-toggle toggle-icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></i>
        </ul>
        <i
          className={`uil uil-apps navbar-open-toggle toggle-icon ${
            isMenuOpen ? "hidden" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
      </main>
    </header>
  );
};

export default Navbar;
