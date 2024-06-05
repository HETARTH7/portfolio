import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "../data";
import Image from "next/image";
import Link from "next/link";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";

export default function Projects() {
  return (
    <div id="projects" className="h-screen">
      <h1 className="pt-28">Projects</h1>
      <div className="flex">
        {projects?.map((project, index) => {
          return (
            <div className="" key={index}>
              <h1>{project?.name}</h1>
              <Image
                src={project?.imgUrl}
                alt=""
                width={1000}
                height={1000}
                className="w-3/4"
              />
              <Link href={project?.githubUrl} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link href={project?.devLink} target="_blank">
                <FontAwesomeIcon icon={faLink} />
              </Link>
            </div>
          );
        })}
      </div>
      <FontAwesomeIcon className="float-left absolute size-7" icon={faAngleLeft} />
      <FontAwesomeIcon className="float-right absolute size-7" icon={faAngleRight} />
    </div>
  );
}
