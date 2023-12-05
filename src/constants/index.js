import { webDesign, webDev, programmer, react } from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
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
// export { navLinks, services };
export const projects = [
  {
    title: "Messaging Application",
    tech_used: "MERN, Socket.io, Axios",
    iconBg: "#fff",
    date: "March 2020 - April 2021",
    points: [
      "Using MERN Stack for Skeleton",
      "Instant Messaging Application implementing socket.io for better connectivity",
      "Axios for handeling API calls",
      "User Authentication to keep profile locked away from unwanted Guests.",
    ],
    projectLink: "https://github.com/Rhitam-Banerjee/chatApp",
    hasView: true,
  },
  {
    title: "Anime-Puppeteer",
    tech_used: "Node.js, Puppeteer",
    iconBg: "#fff",
    date: "Jan 2021 - Feb 2022",
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
    title: "E-Commerce",
    tech_used: "MERN Stack, Socket.io, Redux Toolkit",
    iconBg: "#fff",
    date: "Jan 2022 - Jan 2023",
    points: [
      "A Shopping Application with implementation of MERN Stack for providing a structure.",
      "Redux Toolkit to provide extra support in managing states of different components.",
      "Socket.io to improve connection between server and client.",
    ],
    projectLink: "https://github.com/Rhitam-Banerjee/chatApp",
    hasView: true,
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "ABC",
  //   iconBg: "#fff",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  //   projectLink:""
  // },
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
