import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <div>
          <p>Meu contato:</p>
          <p>19 995485416</p>
        </div>
        <div>
          <p>Email:</p>
          <p>danielbricola@hotmail.com</p>
        </div>
      </div>
      <div className="footer-social-links">
        <a
          href="https://github.com/danielbricola"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={36} />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-bricola/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={36} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
