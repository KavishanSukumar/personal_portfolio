import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import "./footer.css";
import logo from "../../assets/logo.png";
function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <img src={logo} alt="" className="footer__logo-image" />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target={"_blank"}>
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target={"_blank"}>
          <FiInstagram />
        </a>

        <a href="https://twitter.com" target={"_blank"}>
          <FiTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
