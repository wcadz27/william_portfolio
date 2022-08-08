import React, { useState } from "react";

import { Header, About, Work, Contact, Footer } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import ParticleBackground from "./assets/ParticleJs/ParticleBackground";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="app">
      <div className="particle-bg">
        <ParticleBackground theme={theme} />
      </div>
      <div className="page-sections">
        <Header theme={theme} />
        <Navbar theme={theme} setTheme={setTheme} />
        <About theme={theme} />
        <Work theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />
      </div>
    </div>
  );
};

export default App;
