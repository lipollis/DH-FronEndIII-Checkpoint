/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./Banner_Style.scss";
import Typed from "react-typed";
import Particles  from "react-tsparticles";



const Banner = () => {

  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
<>
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1 className="titulo">ALINE POLLIS</h1>

        <Typed
          className="typed-text"
          strings={["Engenheira", "FullStack"]}
          typeSpeed={60}
          backspeed={60}
          loop
        />

        <a href="#contacts" ><button className="btn-main-offer"> Contato </button></a>

      </div>
    </div>

{/* =============  PARTICLES =================== */}
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        // fpsLimit: 60,
        // fullScreen:{
        //   enable: false,
        //   zIndex:	2
        //   },
        interactivity: {
          
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
            // resize: true,
          },
          modes: {
            bubble: {
              // distance: 400,
              // duration: 2,
              opacity: 0.8,
              size: 10,
              "color": {"value": "#FF4A3B"}
            },
          //   push: {
          //     quantity: 4,
          //   },
          //   repulse: {
          //     distance: 200,
          //     duration: 0.4,
          //   },
          },
        },
        particles: {
          // color: {
          //   value: "#ffffff",
          // },
          // links: {
          //   color: "#ffffff",
          //   distance: 150,
          //   enable: true,
          //   opacity: 0.5,
          //   width: 1,
          // },
          collisions: {
            enable: true,
          },
          move: {
            // direction: "none",
            enable: true,
            // outMode: "bounce",
            // random: false,
            speed: 1,
            // straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          // shape: {
          //   type: "circle",
          // },
          // size: {
          //   random: true,
          //   value: 5,
          // },
        },
        detectRetina: true,
      }}
    />


</>
  )
}

export default Banner;