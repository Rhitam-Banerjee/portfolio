import useMousePosition from "./useMousePosition";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Cursor = () => {
  const { x, y } = useMousePosition().mousePosition;
  const changeShape = useMousePosition().changeShape;

  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();

  const calculateScrollProgress = () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const progress = (currentScroll / scrollHeight) * 100;
    setScrollProgress(progress);
  };
  useEffect(() => {
    const handleScroll = () => {
      calculateScrollProgress();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      strokeDasharray: `${scrollProgress} ${scrollProgress}`,
      strokeDashoffset: `0`,
    });
  }, [scrollProgress, controls]);
  return (
    <>
      <motion.div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={`fixed top-0 left-0 w-7 h-7 border-[2px] border-primary_transparant rounded-full translate-x-[-50%] translate-y-[-50%] pointer-events-none z-[99] !transition-transform ${
          changeShape
            ? "!scale-[2] !border-none bg-primary_transparant_max"
            : ""
        }`}
        animate={controls}
        initial={{ strokeDashoffset: `${scrollProgress}` }}
      ></motion.div>
    </>
  );
};

export default Cursor;
