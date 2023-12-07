/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { projects, toolsIcon } from "../constants";
import { SectionWrapper } from "../HOC";
import { textVariant } from "../utils";
import { Link } from "react-router-dom";

const ExperienceCard = ({ project }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#8C98BA",
        color: "#fff",
        borderRadius: "10px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #FFAF38" }}
      dateClassName="text-white"
      date={project.date}
      iconStyle={{
        background: project.iconBg,
        boxShadow:
          "0 0 0 4px #fff, inset 0 2px 5px rgba(0,0,0,.2), 0 5px 5px rgba(0,0,0,.2)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full ">
          {/* <img
            src={project.icon}
            alt={project.company_name}
            className="w-[60%] h-[60%] object-contain"
          /> */}
        </div>
      }
    >
      <div>
        <h3 className="text-primary text-[24px] font-black">{project.title}</h3>
        <p className="text-primary text-[16px] !font-normal m-0">
          <span className="font-black">Tech. Used:</span> {project.tech_used}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {project.points.map((point, index) => (
          <li
            key={`project-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-[1em] flex flex-row sm:flex-col justify-between items-center sm:items-start max-w-[300px]">
        <Link
          to={project.projectLink}
          target="_blank"
          className="p-[20px] pt-[10px] pb-[10px] bg-primary mr-[20px] sm:mr-0 sm:mb-[20px] rounded-md"
        >
          View Code
        </Link>
        {project.hasView && (
          <Link
            to="/"
            target="_blank"
            className="p-[20px] pt-[10px] pb-[10px] bg-tertiary rounded-md"
          >
            View Project
          </Link>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.heroHeadText} text-tertiary text-center`}>
          Projects
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="max-w-6xl before:bg-tertiary">
          {projects.map((project, index) => (
            <ExperienceCard key={`project-${index}`} project={project} />
          ))}
        </VerticalTimeline>
      </div>
      <motion.div variants={textVariant()} className="mt-20 mb-10">
        <p className={`${styles.sectionSubText} text-center`}>
          What tools I use for Projects
        </p>
        <div>
          {toolsIcon.map((icon) => {
            <div>
              <img src={icon.icon} alt={icon.title} />
            </div>;
          })}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
