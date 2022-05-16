import React from "react";

import { Header, About, Work, Contact, Footer } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import ParticleBackground from "./assets/ParticleJs/ParticleBackground";

const App = () => {
  return (
    <div className="app">
      <div className="particle-bg">
        <ParticleBackground />
      </div>
      <div className="page-sections">
        <Header />
        <Navbar />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
