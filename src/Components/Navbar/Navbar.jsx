import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
            src="/assets/logo1.png"
            alt="Future Vitals"
            className="brand-logo"
          />
        </Link>

        {/* Links */}
        <nav>
          <ul className="nav-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="actions">
          <Link to="/donate" className="donate">
            Donate +
          </Link>
          <Link to="" className="">
            ....
          </Link>
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
