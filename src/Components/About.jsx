import { motion } from "framer-motion";
import { aboutText, services } from "../constants";
import { fadeIn, textVariant } from "../utils";
import { styles } from "../styles";
import ServiceCard from "./Services";
import { SectionWrapper } from "../HOC";
// import { useEffect, useRef } from "react";

const About = () => {
  // const divRef = useRef();
  // useEffect(() => {
  //   const handelScroll = () => {
  //     console.log(divRef.current.getBoundingClientRect().top);
  //   };
  //   document.addEventListener("scroll", handelScroll);
  //   return () => {
  //     document.removeEventListener("scroll", handelScroll);
  //   };
  // });
  return (
    <>
      <motion.div
        variants={textVariant()}
        className={`max-w-6xl mx-auto w-full flex flex-col sm:justify-center sm:items-center pt-10`}
        // ref={divRef}
      >
        <p className={`${styles.sectionSubText} text-center text-secondary`}>
          Introduction
        </p>
        <h2
          className={`${styles.heroHeadText} text-center text-tertiary mb-[20px]`}
        >
          Overview
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`text-white max-w-6xl mx-auto text-center font-light`}
      >
        {aboutText}
      </motion.p>
      <div
        className={`mt-20 grid grid-cols-2 sm:grid-cols-1 gap-10 max-w-6xl mx-auto place-items-center`}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
