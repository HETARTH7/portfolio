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
  { name: "Data Visualization" },
];

export const programmingLanguages: List = [
  { name: "Javascript" },
  { name: "Python" },
  { name: "C++" },
  { name: "Java" },
  { name: "R" },
];

export const jobs: List = [
  { name: "Cactus Communications", subtitle: "Software Engineer Intern" },
  { name: "Accenture", subtitle: "Advanced Application Engineering Analyst" },
];

export type Projects = {
  name: string;
  description?: string;
  imgUrl: string;
  githubUrl: string;
  devLink: string;
}[];

export const projects: Projects = [
  {
    name: "Xrossfit",
    imgUrl: "/xrossfit-img.png",
    githubUrl: "https://github.com/HETARTH7/XrossFit",
    devLink: "https://xross-fit.vercel.app/",
  },
  {
    name: "Weather App",
    imgUrl: "/weather-app-img.png",
    githubUrl: "https://github.com/HETARTH7/Weather-App",
    devLink: "https://weather-app-hetarth7.vercel.app/",
  },
];
