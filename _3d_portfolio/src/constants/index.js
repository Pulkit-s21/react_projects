import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
} from "../assets"

import express from "../assets/icons/express.svg"
import mysql from "../assets/icons/mysql.svg"
import react from "../assets/icons/react.svg"
import bhaargav from "../assets/bhaargav.png"
import srConst from "../assets/srConst.png"
import expenseTracker from "../assets/expenseTracker.png"

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
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Beginner React Native Developer",
    icon: mobile,
  },
  {
    title: "Beginner Backend Developer",
    icon: backend,
  },
  {
    title: "Figma Designer",
    icon: creator,
  },
  {
    title: "MERN Stack Developer",
    icon: react,
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Express",
    icon: express,
  },
  //   {
  //     name: "TypeScript",
  //     icon: typescript,
  //   },
  {
    name: "React JS",
    icon: reactjs,
  },
  //   {
  //     name: "Redux Toolkit",
  //     icon: redux,
  //   },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  //   {
  //     name: "Three JS",
  //     icon: threeJS,
  //   },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  //   {
  //     name: "docker",
  //     icon: docker,
  //   },
]

const experiences = [
  {
    title: "BCA Student",
    company_name: "Chitkara University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2019 - June 2022",
    points: [
      "Develop strong coding skills in languages like Python, Java, or C++.",
      "Learned the basics of computer programming.",
      "Introduced to how networking works.",
      "Took small steps everyday from C to C++.",
    ],
  },
  {
    title: "Started self-learning web development",
    company_name: "Youtube",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    points: [
      "Got a taste of web development and fell in love with it.",
      "Mastered HTML, CSS first as part of only frotnend.",
      "Mastered JS to make my projects dynamic.",
      "After practicing alot of projects from FrontEnd-Mentor, started React with TailwindCSS.",
      "Learning new technologies and ways to make my projects better everyday.",
    ],
  },
  {
    title: "MCA Student",
    company_name: "Chitkara University",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2022 - July 2024",
    points: [
      "Master languages like Java, Python for complex applications.",
      "Got the chance to learn about Salesforce and how to work with it.",
    ],
  },
  {
    title: "MERN Internship",
    company_name: "Calidig Solutions",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2024 - Aug 2024",
    points: [
      "Got introduced to real-world projects as my first project.",
      "Had great team members who taught me how the project works and what my role will be with patience.",
      "Completed my first task after 3 days of understanding code structure.",
      "Worked on frontend, backend and database as my tasks.",
      "Quickly learnt the frontend part and got mastery of it.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Calidig Solutions LLP",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Got confirmed as a permament member of team. Got more tasks and responsibilities in the project",
      "Practicipated and helped in more projects to learn.",
      "Got a chance to work on a Typescript project.",
      "Got the chance to show my dwg -> svg conversion in figma skills as part of my new daily task in project.",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const projects = [
  {
    name: "Bhaargav Finco",
    description:
      "First freelance project for client. Website for a money lender with option of booking an appointment throuh whatsapp message or an email direct from website. Map with leaflet js to show the location of client.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
      {
        name: "leaflet js",
        color: "text-orange-500",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "swiper js",
        color: "blue-text-gradient",
      },
      {
        name: "sweet alert 2",
        color: "text-yellow-500",
      },
    ],
    image: bhaargav,
    live: "https://www.bhaargavfinco.com/",
    github: "https://github.com/Pulkit-s21/Bhaargav-FInco",
  },
  {
    name: "S.R. Constructions",
    description:
      "Freelance project for client. Construction company that wanted some fancy animations and list of all their services. User can book an appointment through email from website. EmailJs is used to send email to the client. Leaflet js to display map with clients address",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "framer motion",
        color: "text-orange-500",
      },
      {
        name: "leaflet js",
        color: "text-blue-500",
      },
      {
        name: "swiper js",
        color: "blue-text-gradient",
      },
      {
        name: "sweet alert 2",
        color: "text-yellow-500",
      },
    ],
    image: srConst,
    live: "https://lakshay-constructions.vercel.app/",
    github: "https://github.com/Pulkit-s21/Lakshay-Constructions",
  },
  {
    name: "Expense Tracker",
    description:
      "User can track their expense by entering description, amount and mode of transaction. Login is through google authenicator from firebase. Firebase lets user save their record for next use. ",
    tags: [
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "sweet alert 2",
        color: "text-yellow-500",
      },
      {
        name: "react router dom",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "react js",
        color: "blue-text-gradient",
      },
    ],
    image: expenseTracker,
    live: "https://expense-tracker-ec75b7.netlify.app",
    github:
      "https://github.com/Pulkit-s21/react_projects/tree/main/_expenseTracker",
  },
]

export { services, technologies, experiences, testimonials, projects }
