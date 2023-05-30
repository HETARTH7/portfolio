import Image from "next/image";
const projectsList = require("../projects.json");

const Projects = () => {
  return (
    <div className="text-center mt-20 mb-10" id="projects">
      <h1 className="text-6xl max-[600px]:text-4xl">Projects</h1>
      {projectsList.projects.map((x: any, index: any) => {
        return (
          <div key={index}>
            <Image src={x.imageURL} alt="" width={500} height={100} />
            <a className="text-2xl" href={x.URL} target="_blank">
              {x.name}
            </a>
            <p>{x.stack}</p>
            <p>{x.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
