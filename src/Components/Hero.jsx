import RobotCanvas from "./canvass/Robot";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typewriter from "./Typewriter/Typewriter";

const Hero = () => {
  return (
    <section
      className={`${styles.paddingX} xl:p-0 relative w-full max-w-6xl h-screen mx-auto flex flex-row gap-5 sm:justify-center sm:bg-gradient-to-b bg-gradient-to-r from-primary from-20%`}
    >
      <div
        className={`absolute mx-auto top-1/2 sm:top-[180px] translate-y-[-50%] sm:w-[80%] w-1/2 max-w-6xl leading-[60px]`}
      >
        <div>
          <h1
            className={`${styles.heroHeadText} mr-auto sm:m-auto w-max text-secondary`}
          >
            Hi, I&apos;m <br /> <span>Rhitam</span>
          </h1>
          <p
            className={`${styles.heroSubText} mr-auto sm:m-auto pl-1 text-tertiary w-max`}
          >
            A <Typewriter />
          </p>
        </div>
      </div>
      <div className="sm:translate-y-[41%] sm:translate-x-0 translate-x-5 translate-y-[20%] sm:w-full w-1/2 ml-auto sm:max-h-[600px]">
        <RobotCanvas />
      </div>
      <div className="sm:hidden absolute bottom-32 left-1/2 flex justify-center items-center translate-x-[-50%]">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
