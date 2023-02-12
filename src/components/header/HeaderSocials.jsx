import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaHackerrank, FaStackOverflow } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sukumar-kavishan-31bb311a4/"
        target={"_blank"}
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/KavishanSukumar" target={"_blank"}>
        <FaGithub />
      </a>
      <a href="https://www.hackerrank.com/KavishanSukumar" target={"_blank"}>
        <FaHackerrank />
      </a>
      <a
        href="https://stackoverflow.com/users/13060709/kavishan-sukumar"
        target={"_blank"}
      >
        <FaStackOverflow />
      </a>
    </div>
  );
};

export default HeaderSocials;
