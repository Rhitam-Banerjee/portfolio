/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../HOC";
import { textVariant } from "../utils";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#8C98BA",
        color: "#fff",
        borderRadius: "10px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #FFAF38" }}
      dateClassName="text-primary"
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow:
          "0 0 0 4px #fff, inset 0 2px 5px rgba(0,0,0,.2), 0 5px 5px rgba(0,0,0,.2)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full ">
          {/* <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          /> */}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-primary text-[16px] !font-bold m-0">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center `}>
          What I have done so far
        </p>
        <h2 className={`${styles.heroHeadText} text-primary text-center`}>
          Projects
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="max-w-6xl before:bg-tertiary">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work", "white");
