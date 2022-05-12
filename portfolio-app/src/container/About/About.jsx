import React from "react";
import "./About.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="app__about app__flex">
      <motion.div>
        <h1 className="app__about-heading">About</h1>
        <img />
        <p className="p-text"></p>
        <div className="app__about-skills"></div>
      </motion.div>
    </div>
  );
};

export default About;
