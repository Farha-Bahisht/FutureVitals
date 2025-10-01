import React from "react";
import "./Footer.css";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} FutureVitals. All Rights Reserved</p>
      <div className="social-links">
        <a 
          href="https://instagram.com/futurevitals" 
          target="_blank" 
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a 
          href="https://youtube.com/@futurevitals" 
          target="_blank" 
          rel="noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>

        <a 
          href="https://www.tiktok.com/@futurevitals" 
          target="_blank" 
          rel="noreferrer"
          aria-label="TikTok"
        >
          <FaTiktok />
        </a>
      </div>
    </footer>
  );
}
