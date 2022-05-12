import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";

import "./Header.scss";
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.3 }}
        className="app__header-name-info"
      >
        <div className="app__header-name">
          <div className="name-tag app_flex">
            <p className="p-text">
              Hello, I'm <span className="bold-name-tag">William</span>
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.3 }}
        className="app__header-info-dev"
      >
        <div className="app__header-dev">
          <div className="dev-tag app__flex">
            <p className="p-text">I'm a full stack web developer.</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="app__header-button"
      >
        <button className="app__header-button">
          <div className="view-work app__flex">
            <p className="p-text">View my work</p>
            <span>
              <AiOutlineArrowDown />
            </span>
          </div>
        </button>
      </motion.div>
    </div>
  );
};

export default Header;
