import React, { useState } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "contact"].map((tab) => (
          <li className="app__flex p-text" key={`link-${tab}`}>
            <div />
            <a href={`#${tab}`}>{tab}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
