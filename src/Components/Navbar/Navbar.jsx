import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Logo */}
        <Link to="/" className="logo">
          <img
            src="/assets/logo.png"
            alt="Future Vitals"
            className="brand-logo"
          />
        </Link>

        {/* Nav Links */}
        <nav>
          <ul className="nav-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/news">News/Events</Link></li>

            {/* Dropdown Menu */}
            <li
              className="dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className="dropdown-toggle">Our Chapters ▾</span>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/chapters/va">Future Vitals VA Chapter</Link></li>
                  <li><Link to="/chapters/tx">Future Vitals TX Chapter</Link></li>
                  {/* ✅ Add more chapters here later */}
                </ul>
              )}
            </li>
          </ul>
        </nav>
        {/* Donate Button */}
        <div className="actions">
          <Link to="/donate" className="donate">
            Donate +
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
