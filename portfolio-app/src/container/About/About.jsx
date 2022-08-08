import React from "react";
import "./About.scss";
import { motion } from "framer-motion";

import {
  MaleIcon,
  ReactJSLogo,
  CssLogo,
  ExpressJSLogo,
  GitLogo,
  HtmlLogo,
  JsLogo,
  MongoDBLogo,
  NextJSLogo,
  NodeJSLogo,
  SassLogo,
} from "../../assets/icons/Icons";

const icons = [
  ReactJSLogo,
  CssLogo,
  ExpressJSLogo,
  GitLogo,
  HtmlLogo,
  JsLogo,
  MongoDBLogo,
  NextJSLogo,
  NodeJSLogo,
  SassLogo,
];

const iconNames = [
  "React",
  "Css",
  "ExpressJS",
  "Git",
  "Html",
  "Javascript",
  "MongoDB",
  "NextJS",
  "NodeJS",
  "Sass",
];

const random = (min, max) => Math.random() * (max - min) + min;

const IconsList = icons.map((Icon, i) => {
  return (
    <div className="app__about-skills-item">
      <motion.div
        key={i}
        whileInView={{ x: 0, opacity: [0, 1] }}
        transition={{ duration: random(2, 3) }}
        viewport={{ once: true }}
      >
        <Icon />
      </motion.div>
      <p className="app__about-skill-name p-text">{iconNames[i]}</p>
    </div>
  );
});

const About = ({ theme }) => {
  return (
    <div
      className={`app__about ${theme === "dark" ? "dark-mode" : ""}`}
      id="about"
    >
      <motion.div
        whileInView={{ y: [50, 100], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="app__about-heading-container"
      >
        <h1 className="app__about-heading header-highlight">About</h1>
      </motion.div>
      <div className="app__about-info-container">
        <motion.div className="app__about-description">
          <div className="app__about-icon app__flex">
            <MaleIcon />
          </div>
          <div className="app__about-description-text">
            <p className="p-text">
              {" "}
              Passion-driven individual to the limitless knowledge of Web
              Development offers. I'm a full stack developer with a profound
              dedication for Javascript, React, and everything in Web
              Development. Everything in Web Development excites me as they
              offer limitless creativity with the exchange of understanding the
              logic of the development technology. I like to spend my time
              reading books, lifting in the gym, and playing piano/guitar{" "}
            </p>
          </div>
        </motion.div>
        <div className="app__about-skills-container">
          <div className="app__about-skills-list app__flex">{IconsList}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
