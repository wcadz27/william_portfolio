import { motion } from "framer-motion";
import React from "react";
import { AiOutlineGithub, AiFillEye } from "react-icons/ai";

import "./Work.scss";

const Projects = {
  data: [
    {
      name: "Sample1",
      className: "sample-one project-container",
      details: [
        { links: [{ website: "hello.com" }, { github: "github.hello" }] },
        { description: "this is my sample website" },
      ],
    },
    {
      name: "Sample2",
      className: "sample-two project-container",
      details: [
        { links: [{ website: "hello" }, { github: "hello" }] },
        { description: "this is another sample website" },
      ],
    },
  ],
};

const Work = () => {
  return (
    <div className="app__work app__flex" id="work">
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
          <div key={index} className={item.className}>
            <div className="img-container">
              {/* <img alt="" className={}/> */}
              <div className="work-links-container">
                <motion.div
                  className="app__work-hover"
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                >
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
                </motion.div>
              </div>
            </div>
            <div className="project-info">
              <h3 className="p-text">{item.name}</h3>
              <p className="p-text">{item.details[1].description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
