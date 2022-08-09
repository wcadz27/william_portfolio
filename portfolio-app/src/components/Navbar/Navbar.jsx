import React from "react";
import { LogoName } from "../../assets/icons/Icons";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

import "./Navbar.scss";

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <LogoName />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "contact"].map((tab) => (
          <li className="app__flex" key={`link-${tab}`}>
            <div />
            <a
              className={`${theme === "dark" ? "dark-mode" : ""}`}
              href={`#${tab}`}
            >
              {tab}
            </a>
          </li>
        ))}
        <div>
          {theme === "light" ? (
            <BsToggleOff onClick={() => setTheme("dark")} size="3em" />
          ) : (
            <BsToggleOn onClick={() => setTheme("light")} size="3em" />
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
