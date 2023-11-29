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
      strokeDasharray: `${scrollProgress},100`,
      strokeDashoffset: `0`,
    });
  }, [scrollProgress, controls]);
  return (
    <>
      <motion.div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={`fixed top-1/2 left-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[99] ${
          changeShape ? "!scale-[2]" : ""
        }`}
      >
        <motion.svg
          viewBox="0 0 36 36"
          width="30"
          height="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            className={`stroke-primary_transparant ${
              changeShape ? "fill-primary_transparant_max" : "fill-none"
            }`}
            cx="18"
            cy="18"
            r="15"
            strokeWidth="2"
            animate={controls}
            initial={{ strokeDasharray: "0, 100" }}
          />
        </motion.svg>
      </motion.div>
    </>
  );
};

export default Cursor;
