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
  "Js",
  "MongoDB",
  "NextJS",
  "NodeJS",
  "Sass",
];

const IconsList = icons.map((Icon, index) => {
  return (
    <div className="app__about-skills-item">
      <div key={index}>
        <Icon />
      </div>
      <p className="app__about-skill-name p-text">{iconNames[index]}</p>
    </div>
  );
});

const About = () => {
  return (
    <div className="app__about app__flex">
      <motion.div>
        <h1 className="app__about-heading app__flex header-highlight">About</h1>
      </motion.div>
      <div className="app__about-info-container">
        <motion.div className="app__about-description">
          <div className="app__about-icon app__flex">
            <MaleIcon className="about-icon" />
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
        <motion.div className="app__about-skills-container">
          <div className="app__about-skills-list app__flex">{IconsList}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
