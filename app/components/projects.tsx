import { useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "../data";
import Image from "next/image";
import Link from "next/link";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const n = projects.length;

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % n);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + n) % n);
  };

  return (
    <div
      id="projects"
      className="h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl mb-10">Projects</h1>
      <div className="relative w-full max-w-4xl flex justify-center items-center">
        {projects?.map((project, index) => {
          return (
            <div
              className={`${
                activeIndex === index ? "block" : "hidden"
              } text-center`}
              key={index}
            >
              <h1 className="text-2xl mb-4">{project?.name}</h1>
              <Image
                src={project?.imgUrl}
                alt=""
                width={800}
                height={800}
                className="w-full h-auto mb-4"
              />
              <div className="flex justify-center space-x-4">
                <Link href={project?.githubUrl} target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                </Link>
                <Link href={project?.devLink} target="_blank">
                  <FontAwesomeIcon icon={faLink} className="text-3xl" />
                </Link>
              </div>
            </div>
          );
        })}
        <button
          onClick={prevSlide}
          className="absolute left-0 transform -translate-y-1/2 top-1/2 text-3xl"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 transform -translate-y-1/2 top-1/2 text-3xl"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}
