import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { programmingLanguages, skills } from "../data";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div
      id="about"
      className="py-20 px-8 flex flex-col items-center"
    >
      <div className="max-w-4xl w-full text-center mb-16">
        <p className="text-5xl font-bold flex items-center justify-center mb-4">
          I write code for a living{" "}
          <FontAwesomeIcon icon={faCode} className="ml-3 text-blue-500" />
        </p>
        <p className="text-lg">
          Passionate about creating innovative solutions through code
        </p>
      </div>
      <div className="max-w-4xl w-full mb-16">
        <h2 className="text-3xl font-semibold mb-8">I&apos;ve worked on</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills?.map((skill, index) => (
            <div
              key={index}
              className="border border-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <p className="text-lg font-medium">{skill?.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-semibold mb-8 text-right">
          I&apos;m familiar with
        </h2>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4">
          {programmingLanguages?.map((programmingLanguage, index) => (
            <div
              key={index}
              className="border border-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <p className="text-lg font-medium">{programmingLanguage?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
