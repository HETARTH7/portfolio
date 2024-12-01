import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "../data";
import Link from "next/link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useTheme } from "next-themes";

export default function Projects() {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <div
      id="projects"
      className="h-screen flex flex-col justify-center items-center mt-64 mb-64"
    >
      <h1 className="text-3xl mb-10">Projects</h1>
      <div className="relative w-full max-w-4xl justify-center items-center">
        {projects?.map((project, index) => (
          <Accordion
            key={`project-${index}`}
            sx={{ color: "inherit", bgcolor: "inherit" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMore
                  className={`${theme === "dark" ? "text-white" : ""}`}
                />
              }
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {project.name}
              </Typography>
              <Typography>{project.techStack}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{project.description}</Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Link href={project?.githubUrl} target="_blank">
                <FontAwesomeIcon icon={faGithub} className="text-xl ml-3" />
              </Link>
              {project?.devLink && (
                <Link href={project?.devLink} target="_blank">
                  <FontAwesomeIcon icon={faGlobe} className="text-xl ml-3" />
                </Link>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      <h1 className="text-3xl my-10">Publication</h1>
      <div className="relative w-full max-w-4xl justify-center items-start">
        <div className="mb-4">
          {/* Title and Link */}
          <div className="flex justify-between items-center">
            <Typography className="text-lg font-semibold">
              Ensemble transfer learning meets explainable AI: A deep learning
              approach for leaf disease detection
            </Typography>
            <Link
              href="https://doi.org/10.1016/j.ecoinf.2024.102925"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-xl text-blue-500 ml-3"
              />
            </Link>
          </div>
          {/* Publisher */}
          <Typography className="text-gray-600 mt-2">
            Ecological Informatics
          </Typography>
        </div>
      </div>
    </div>
  );
}
