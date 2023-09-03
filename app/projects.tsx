import Image from "next/image";
const projectsList = require("../projects.json");
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
const Projects = () => {
  return (
    <div className="text-center mt-20 mb-10" id="projects">
      <h1
        className={`${pacifico.className} font-sans text-6xl max-[600px]:text-4xl hover:underline hover:text-sky-500`}
      >
        Projects
      </h1>
      {projectsList.projects.map((x: any, index: any) => {
        return (
          <div
            className={`md:flex text-center mb-4 mt-20 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            key={index}
          >
            <div className="md:w-1/2 text-center mt-10">
              <p className="text-4xl mb-4">{x.name}</p>
              <p className="mb-2 text-teal-700">{x.stack}</p>
              <p>{x.description}</p>
              <div className="mt-10">
                <a
                  className="m-5 hover:text-sky-500"
                  href={x.code}
                  target="_blank"
                >
                  Code
                </a>
                {x.web === "" ? null : (
                  <a
                    className="m-5 hover:text-sky-500"
                    href={x.web}
                    target="_blank"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
            <div className="md:w-1/2 md:pl-24">
              <Image
                className="rounded-2xl mt-10 border-8"
                src={x.imageURL}
                alt=""
                width={500}
                height={100}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
