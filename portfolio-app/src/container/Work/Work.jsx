import { motion } from "framer-motion";
import React from "react";

import "./Work.scss";
const Work = () => {
  return (
    <div className="app__work app__flex">
      <motion.div className="app__flex">
        <h1 className="app__work-heading header-highlight">Work</h1>
      </motion.div>
    </div>
  );
};

export default Work;
