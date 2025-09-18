import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: "#ffffff", // white particles
          },
          links: {
            enable: false, // no connecting lines
          },
          move: {
            enable: true,       // allow movement
            speed: 1,           // adjust speed for smoother motion
            direction: "none",  // free movement
            random: true,       // random direction
            straight: false,    // not in a straight line
            outModes: {
              default: "bounce", // bounce off screen edges
            },
          },
          size: {
            value: { min: 1, max: 3 }, // varied particle size
          },
          opacity: {
            value: 0.8,
            random: true,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // particles push away on hover
            },
            onClick: {
              enable: true,
              mode: "push", // add more particles when clicked
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              quantity: 3,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
