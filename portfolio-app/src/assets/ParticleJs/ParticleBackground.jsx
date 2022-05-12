import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import React, { useCallback } from "react";

const ParticleBackground = () => {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ParticleBackground;
