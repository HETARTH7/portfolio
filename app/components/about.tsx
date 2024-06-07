import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { jobs, programmingLanguages, skills } from "../data";
import { faArrowRight, faCode } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div
      id="about"
      className="h-screen flex flex-col justify-center items-center p-10"
    >
      <p className="text-4xl flex items-center justify-end w-full mb-10">
        I write code for a living{" "}
        <FontAwesomeIcon icon={faCode} className="ml-2" />
      </p>
      <div className="w-full mb-10">
        <h2 className="text-2xl">I&apos;ve worked on</h2>
        <div className="flex flex-wrap mt-5 gap-4">
          {skills?.map((skill, index) => (
            <div key={index} className="border border-solid rounded-lg p-2">
              {skill?.name}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mb-10">
        <h2 className="text-2xl text-right">I&apos;m familiar with</h2>
        <div className="flex flex-wrap mt-5 gap-4 justify-end">
          {programmingLanguages?.map((programmingLanguage, index) => (
            <div key={index} className="border border-solid rounded-lg p-2">
              {programmingLanguage?.name}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-2xl text-center mb-10">WORK EXPERIENCE</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {jobs.map((job, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`text-center border rounded-xl p-5 ${
                  index === jobs.length - 1 ? "border-green-400" : ""
                }`}
              >
                <h1 className="text-xl font-semibold">{job?.name}</h1>
                <h2 className="text-lg text-gray-600">{job?.subtitle}</h2>
              </div>
              {index < jobs.length - 1 && (
                <FontAwesomeIcon
                  className="text-2xl mx-5"
                  icon={faArrowRight}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
