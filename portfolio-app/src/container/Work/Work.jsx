import { motion } from "framer-motion";
import React from "react";
import LazyLoad from "react-lazyload";
import { AiOutlineGithub, AiFillEye } from "react-icons/ai";

import "./Work.scss";
import MovieAppImage from "../../assets/movie-app-image.png";
import PortfolioImage from "../../assets/portfolio-image.png";

const Projects = {
  data: [
    {
      name: "MovieTime",
      className: "sample-one project-container",
      details: [
        {
          links: [
            { website: "hello.com" },
            { github: "github.hello" },
            { imgURL: MovieAppImage },
          ],
        },
        {
          description:
            "A full stack movie searching app built with React, Tailwind, and Firebase with CRUD functionality",
        },
      ],
    },
    {
      name: "My Portfolio",
      className: "sample-two project-container",
      details: [
        {
          links: [
            { website: "hello" },
            { github: "hello" },
            { imgURL: PortfolioImage },
          ],
        },
        {
          description:
            "A simple front end portfolio app built with React, SASS, and tsParticles as the background",
        },
      ],
    },
  ],
};

const Work = ({ theme }) => {
  return (
    <div
      className={`app__work app__flex ${theme === "dark" ? "dark-mode" : ""}`}
      id="work"
    >
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="app__flex"
      >
        <h1 className="app__work-heading header-highlight">Work</h1>
      </motion.div>
      <motion.div className="app__work-projects-container">
        {Projects.data.map((item, index) => (
          <div key={index} className={`${item.className} work-container`}>
            <div className="work-links-container">
              <LazyLoad className="img-container">
                <img src={item.details[0].links[2].imgURL} alt={item.name} />
              </LazyLoad>
              <motion.div
                className="app__work-hover"
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
              >
                <div className="icons-container">
                  <motion.div
                    className="icon-container"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <a href={""} target="" rel="">
                      <AiOutlineGithub className="work-link-icon" />
                    </a>
                  </motion.div>
                  <motion.div
                    className="icon-container"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <a href={""} target="" rel="">
                      <AiFillEye className="work-link-icon" />
                    </a>
                  </motion.div>
                </div>
                <div className="project-info">
                  <h3 className="p-text">{item.name}</h3>
                  <p className="p-text">{item.details[1].description}</p>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
