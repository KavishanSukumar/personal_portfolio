import React from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello&nbsp;I'm</h5>
        <h1>S. Kavishan</h1>
        <h5 className="text-light">Software&nbsp;Engineer </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="" srcset="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
}

export default Header;
