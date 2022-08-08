import React from "react";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

import "./Footer.scss";
const Footer = ({ theme }) => {
  return (
    <div
      className={`app__footer-container app__flex ${
        theme === "dark" ? "dark-mode" : ""
      }`}
    >
      <div className="app__footer">
        <div className="icons-container">
          <a
            href="https://www.linkedin.com/in/william-cadiz-83b541195/"
            className="footer-icon-link"
            target="_blank"
          >
            <AiFillLinkedin className="footer-icon" />
          </a>
          <a
            href="https://github.com/wcadz27"
            className="footer-icon-link"
            target="_blank"
          >
            <AiOutlineGithub className="footer-icon-middle" />
          </a>
          <a
            href="mailto:williamcadz360@gmail.com"
            className="footer-icon-link"
            target="_blank"
          >
            <AiOutlineMail className="footer-icon" />
          </a>
        </div>
        <p className="p-text">WILLIAM CADIZ ©2022</p>
      </div>
    </div>
  );
};

export default Footer;
