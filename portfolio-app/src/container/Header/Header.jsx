import React from "react";
import { motion } from "framer-motion";
import { DownArrow } from "../../assets/icons/Icons";

import "./Header.scss";
const Header = ({ theme }) => {
  return (
    <div className="app__header" id="home">
      <div className="app__header-text-container">
        <motion.div
          whileInView={{ x: [-25, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__header-info-name"
          viewport={{ once: true }}
        >
          <p className={`header-text ${theme === "dark" ? "dark-mode" : ""}`}>
            Hello, I'm <span className="bold-name-tag">William</span>
          </p>
        </motion.div>
        <motion.div
          whileInView={{ x: [25, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__header-info-dev"
          viewport={{ once: true }}
        >
          <p className={`header-text ${theme === "dark" ? "dark-mode" : ""}`}>
            I'm a front-end web developer.
          </p>
        </motion.div>
      </div>
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 4 }}
        className="app__header-guide"
        viewport={{ once: true }}
      >
        <a
          href="#about"
          className={`arrow-container ${theme === "dark" ? "dark-mode" : ""}`}
        >
          <DownArrow />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
