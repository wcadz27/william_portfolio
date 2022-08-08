import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback, useEffect, useState } from "react";

const ParticleBackground = ({ theme }) => {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  /* 
  const [bgColor, setBgColor] = useState("#edf2f8");
  const [particleColor, setParticleColor] = useState("030303");

  useEffect(() => {
    if (darkMode) {
      setParticleColor("#A5C9CA");
      setBgColor("#2C3333");
    }
  }, []);
 */
  return (
    <Particles
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: theme === "dark" ? "#2C3333" : "#edf2f8",
          },
          position: "50% 50%",
          repeat: "no-repeat",
          size: "20%",
        },
        backgroundMask: {
          cover: {
            color: {
              value: "#030303",
            },
          },
        },
        fullScreen: {
          zIndex: 1,
        },
        particles: {
          color: {
            value: theme === "dark" ? "#A5C9CA" : "#030303",
          },
          links: {
            color: {
              value: "#ffffff",
            },
            distance: 150,
            opacity: 0.4,
            shadow: {
              enable: true,
            },
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 600,
              },
            },
            enable: true,
            path: {},
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            random: true,
            speed: 1,
            spin: {},
          },
          number: {
            density: {
              enable: true,
            },
            value: 20,
          },
          opacity: {
            random: {
              enable: true,
            },
            value: {
              min: 0,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0,
            },
          },
          size: {
            random: {
              enable: true,
            },
            value: {
              min: 1,
              max: 3,
            },
            animation: {
              speed: 4,
              minimumValue: 0.3,
            },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
