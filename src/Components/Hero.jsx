import React from "react";
import RobotCanvas from "./canvass/Robot";
import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EarthCanvas } from "./canvass";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <RobotCanvas />
      {/* <EarthCanvas /> */}
    </section>
  );
};

export default Hero;
