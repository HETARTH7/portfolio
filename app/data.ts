import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faKaggle,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

export type DevLinks = {
  href: string;
  icon: IconDefinition;
}[];

export const devLinks: DevLinks = [
  {
    href: "https://www.linkedin.com/in/hetarth-raval-936462218/",
    icon: faLinkedin,
  },
  {
    href: "https://github.com/HETARTH7",
    icon: faGithub,
  },
  {
    href: "https://stackoverflow.com/users/16973267/hetarth7",
    icon: faStackOverflow,
  },
  {
    href: "https://www.kaggle.com/hetarthraval",
    icon: faKaggle,
  },
];

export type Links = {
  name: string;
  href: string;
}[];

export const links: Links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export type List = {
  name: string;
  subtitle?: string;
}[];

export const skills: List = [
  { name: "Full Stack Development" },
  { name: "Machine Learning" },
  { name: "Deep Learning" },
  { name: "Artificial Intelligence" },
  { name: "Computer Vision" },
  { name: "Natural Language Processing" },
];

export const programmingLanguages: List = [
  { name: "Python" },
  { name: "Java" },
  { name: "Javascript" },
  { name: "Typescript" },
  { name: "C++" },
];

export const jobs: List = [
  { name: "Cactus Communications", subtitle: "Software Engineer Intern" },
  { name: "Accenture", subtitle: "Advanced Application Engineering Analyst" },
];

export type Projects = {
  name: string;
  description: string;
  techStack: string;
  githubUrl: string;
  devLink?: string;
}[];

export const projects: Projects = [
  {
    name: "Xrossfit",
    description:"A MERN Stack app for users to keep a log of their daily exercises, buy training equipment and payment with additional functionalities such as user Authentication, payment gateway, admin portal and exercise recommendation.",
    githubUrl: "https://github.com/HETARTH7/XrossFit",
    devLink: "https://xross-fit.vercel.app/",
    techStack:
      "Javascript, ReactJS, NodeJS, ExpressJS, MongoDB, Mongoose, JWT, Socket.io",
  },
  {
    name: "Twitter Sentiment Analysis",
    description:"",
    githubUrl: "https://github.com/HETARTH7/Twitter-Sentiment-Analysis",
    techStack:
      "Python3, Scikit-learn, NumPy, Matplotlib, Pandas",
  },
  {
    name: "Weather App",
    description:"A front-end app that provides real-time weather information for any location.",
    githubUrl: "https://github.com/HETARTH7/Weather-App",
    devLink: "https://weather-app-hetarth7s-projects.vercel.app/",
    techStack: "NextJS, Typescript",
  },
  {
    name: "Password Checker App",
    githubUrl: "https://github.com/HETARTH7/Password-Checker",
    description:"This Flask application lets the user securely check if a password has been pwned or hacked without transmitting the password through theinternet. It uses Troy Hunt’s Have I Been Pwned API to get the passwords that have been leaked in the past using only the first five characters ofthe SHA1‑generated password.",
    devLink: "https://password-checker.onrender.com/",
    techStack: "Python3, Flask, Have I Been Pwned API",
  },
];
