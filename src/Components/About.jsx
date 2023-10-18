import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils";
import { styles } from "../styles";
import ServiceCard from "./Services";

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className={`max-w-6xl mx-auto ${styles.paddingX}`}
      >
        <p className={`${styles.heroSubText} text-primary`}>Introduction</p>
        <h2 className={`${styles.heroHeadText} text-secondary`}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`max-w-6xl mx-auto ${styles.paddingX}`}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dolor
        alias explicabo soluta in velit expedita molestiae? Itaque, unde
        accusantium.
      </motion.p>
      <div
        className={`mt-20 flex flex-wrap gap-10 max-w-6xl mx-auto ${styles.paddingX}`}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
