import {
  webDesign,
  webDev,
  programmer,
  react,
  cpp,
  bootstrap,
  objectiveC,
  css,
  express,
  html,
  java,
  javaScript,
  linux,
  materialize,
  mongodb,
  mysql,
  nodejs,
  reactLogo,
  redux,
  sass,
  sqlite,
  tailwindcss,
  ConextPreview,
  Anime,
  Poke,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
];
export const aboutText =
  "Highly motivated Developer with interest in emerging technologies and embracing them to stay at the forefront of the ever-evolving tech landscape. My aim is to design and develop robust web applications with a focus on user which will contribute to a net positive growth of the society as a whole. In my free time, I find solace and inspiration in the world of percussion instruments, it's a way for me to keep my mind fresh and creative. The rhythm and precision required in music mirror my approach to provide solution to such problems.";
export const services = [
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Programmer",
    icon: programmer,
  },
  {
    title: "Web Developer",
    icon: webDev,
  },
  {
    title: "Web Designer",
    icon: webDesign,
  },
];
export const projects = [
  {
    title: "Conext",
    tech_used: "MERN, Socket.io, Axios, Bcrypt",
    iconBg: "#fff",
    date: "March 2020 - April 2020",
    preview: ConextPreview,
    points: [
      "Simple Messaging Application",
      "Using MERN Stack for Skeleton",
      "Recent Logged-In or Registered user Details are stored in LocalStorage, thus reducing the hassle of Loging in each time.",
      "Instant Messaging Application implementing socket.io for connectivity.",
      "Axios for handeling API calls",
      "User Authentication and Password protection through Bcrypt to keep profile locked away from unwanted Guests.",
    ],
    projectLink: "https://github.com/Rhitam-Banerjee/chatApp",
    projectDemo: "https://conextchat.vercel.app/",
    hasView: true,
  },
  {
    title: "Anime-Puppeteer",
    tech_used: "Node.js, Puppeteer",
    iconBg: "#fff",
    date: "September 2020 - September 2020",
    preview: Anime,
    points: [
      "Uses Puppeteer By Google to gather information on a Specific Page to return required details.",
      "Crawls Specific Webpages to find the downloadable link of Anime.",
      "Required only user input of the anime link.",
      "Prompts user for episodes and quality of download.",
    ],
    projectLink: "https://github.com/Rhitam-Banerjee/animepahePuppeteer",
    hasView: false,
  },
  {
    title: "Pokedex",
    tech_used: "React, Axios",
    iconBg: "#fff",
    date: "June 2021 - June 2021",
    preview: Poke,
    points: [
      "Everyone's favourite Pokemon Library POKEDEX in here with a new style",
      "Data fetching through Axios",
      "Recent serches are stored in LocalStorage and is refreshed on new serches",
    ],
    projectLink: "https://github.com/Rhitam-Banerjee/poke",
    projectDemo: "https://rhitam-banerjee.github.io/poke/",
    hasView: true,
  },
  {
    title: "E-Commerce",
    tech_used: "MERN Stack, Socket.io, Redux Toolkit",
    iconBg: "#fff",
    date: "August 2022 - September 2022",
    // preview: ConextPreview,
    points: [
      "A Shopping Application with implementation of MERN Stack for providing a structure.",
      "Redux Toolkit to provide extra support in managing states of different components.",
      "Socket.io to improve connection between server and client.",
    ],
    projectLink: "https://github.com/Rhitam-Banerjee/chatApp",
    projectDemo: "https://github.com/Rhitam-Banerjee/chatApp",
    hasView: false,
  },{
    title: "Simple-ToDo",
    tech_used: "MERN Stack, Socket.io, Axios",
    iconBg: "#fff",
    date: "Jan 2023 - Feb 2023",
    // preview: ConextPreview,
    points: [
      "A simple ToDo application to keep track of your all tasks.",
      "MERN to provide for structure.",
      "Socket.io to smoothen up connection between server and client",
"Axios to fetch data from the server and database",
    ],
    projectLink: "https://github.com/Rhitam-Banerjee/simpleToDo",
    projectDemo: "https://github.com/Rhitam-Banerjee/chatApp",
    hasView: false,
  },
];
export const toolsIcon = [
  {
    title: "CPP",
    icon: cpp,
  },
  {
    title: "Bootstrap",
    icon: bootstrap,
  },
  {
    title: "C",
    icon: objectiveC,
  },
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "Express",
    icon: express,
  },
  {
    title: "HTML",
    icon: html,
  },
  {
    title: "Java",
    icon: java,
  },
  {
    title: "JavaScript",
    icon: javaScript,
  },
  {
    title: "Linux",
    icon: linux,
  },
  {
    title: "Materialize",
    icon: materialize,
  },
  {
    title: "Mongodb",
    icon: mongodb,
  },
  {
    title: "MySql",
    icon: mysql,
  },
  {
    title: "Node.js",
    icon: nodejs,
  },
  {
    title: "React",
    icon: reactLogo,
  },
  {
    title: "Redux",
    icon: redux,
  },
  {
    title: "Sass",
    icon: sass,
  },
  {
    title: "SQL",
    icon: sqlite,
  },
  {
    title: "TailWindCss",
    icon: tailwindcss,
  },
];
// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];
