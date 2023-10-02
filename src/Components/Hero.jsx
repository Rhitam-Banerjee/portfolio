import React from "react";
import RobotCanvas from "./canvass/Robot";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <RobotCanvas />
    </section>
  );
};

export default Hero;
