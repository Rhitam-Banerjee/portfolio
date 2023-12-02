import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils";

const SectionWrapper = (Component, idName, color) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${
          styles.paddingX
        } relative z-0 mb-[100px] pb-[2.5rem] sm:px-2
          ${color === "white" ? "!bg-transparent" : "!bg-primary"}
        `}
        id={idName}
      >
        {/* <span className="hash-span" id={idName}>
          &nbsp;
        </span> */}

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
