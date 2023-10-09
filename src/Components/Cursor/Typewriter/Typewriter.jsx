import React from "react";
import { useTypeWriterEffect } from "./useTypeWriterEffect";
const Typewriter = () => {
  const text = useTypeWriterEffect("Developer", 300);
  return (
    <b className="relative w-max after:content-[''] after:absolute after:top-0 after:-right-2 after:w-1 after:h-full after:bg-tertiary after:animate-blink after:origin-center">
      {text}
    </b>
  );
};

export default Typewriter;
