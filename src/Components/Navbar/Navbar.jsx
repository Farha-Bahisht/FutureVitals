import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="nav-inner" aria-label="Primary">
        {/* Logo */}
        <Link to="/" className="brand" aria-label="Home">
          <img
            src="/logo.png"
            alt="FutureVitals"
            className="brand-logo"
          />
        </Link>

        {/* Links */}
        <ul className="nav-links">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/getinvolved">Get Involved</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>

        {/* Actions */}
        <div className="actions">
          <button className="icon-btn search-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M10.5 3a7.5 7.5 0 105.3 12.8l4.2 4.2 1.4-1.4-4.2-4.2A7.5 7.5 0 0010.5 3zm0 2a5.5 5.5 0 110 11 5.5 5.5 0 010-11z"/>
            </svg>
          </button>
          <Link className="btn donate" to="/donate">
            Donate <span className="plus">+</span>
          </Link>
          {/* Hamburger for mobile */}
          <button
            className={`hamburger ${open ? "is-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <ul className="mobile-links">
          <li><Link onClick={() => setOpen(false)} to="/about">About Us</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/getinvolved">Get Involved</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/blog">Blog</Link></li>
          <li className="mobile-ctas">
            <Link className="btn donate" to="/donate">Donate <span className="plus">+</span></Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
