/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full shadow-md"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-secondary rounded-[10px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
export default ServiceCard;
