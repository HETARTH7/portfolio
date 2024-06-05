import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { jobs, programmingLanguages, skills } from "../data";
import { faArrowRight, faCode } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div id="about" className="h-screen">
      <p className="me-40 pt-20 text-right text-4xl">
        I write code for a living <FontAwesomeIcon icon={faCode} />
      </p>
      <h2 className="text-2xl ms-40 pt-5">I&apos;ve worked on</h2>
      <div className="flex ms-40 mt-5">
        {skills?.map((skill, index) => {
          return (
            <div key={index} className="border border-solid rounded-lg p-2 m-2">
              {skill?.name}
            </div>
          );
        })}
      </div>
      <h2 className="text-2xl me-60 pt-5 text-right">I&apos;m familiar with</h2>
      <div className="flex me-60 mt-5 justify-end">
        {programmingLanguages?.map((programmingLanguage, index) => {
          return (
            <div key={index} className="border border-solid rounded-lg p-2 m-2">
              {programmingLanguage?.name}
            </div>
          );
        })}
      </div>
      <div>
        <h2 className="text-center m-10">WORK EXPERIENCE</h2>
        <div className="flex justify-center">
          {jobs.map((job, index) => (
            <div key={index} className="flex">
              <div
                className={`text-center border rounded-xl p-5 ${
                  index === jobs.length - 1 ? "border-green-400" : ""
                }`}
              >
                <h1>{job?.name}</h1>
                <h2>{job?.subtitle}</h2>
              </div>
              {index < jobs.length - 1 && (
                <FontAwesomeIcon className="m-10 size-7" icon={faArrowRight} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
