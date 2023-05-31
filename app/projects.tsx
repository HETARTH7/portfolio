import Image from "next/image";
const projectsList = require("../projects.json");

const Projects = () => {
  return (
    <div className="text-center mt-20 mb-10" id="projects">
      <h1 className="text-6xl max-[600px]:text-4xl">Projects</h1>
      {projectsList.projects.map((x: any, index: any) => {
        return (
          <div
            className={`md:flex text-center mb-4 mt-20 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}

            key={index}
          >
            <div className="w-1/2 items-center">
              <a className="text-2xl" href={x.URL} target="_blank">
                {x.name}
              </a>
              <p>{x.stack}</p>
              <p>{x.description}</p>
            </div>
            <div className="md:w-1/2 md:pl-24">
              <Image src={x.imageURL} alt="" width={500} height={100} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
