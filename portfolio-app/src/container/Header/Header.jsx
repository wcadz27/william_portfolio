import React from "react";
import { motion } from "framer-motion";
import { DownArrow } from "../../assets/icons/Icons";

import "./Header.scss";
const Header = () => {
  return (
    <div className="app__header app__flex">
      <div className="app__header-text-container">
        <motion.div
          whileInView={{ x: [-25, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__header-name-info"
        >
          <div className="app__header-name">
            <div className="name-tag app_flex">
              <p className="header-text">
                Hello, I'm <span className="bold-name-tag">William</span>
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: [25, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__header-info-dev"
        >
          <div className="app__header-dev">
            <div className="dev-tag app__flex">
              <p className="header-text">I'm a full stack web developer.</p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 4 }}
        className="app__header-guide"
      >
        <button className="arrow-container">
          <DownArrow />
        </button>
      </motion.div>
    </div>
  );
};

export default Header;
