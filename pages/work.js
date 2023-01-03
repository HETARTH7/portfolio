import Link from "next/link";

const Work = () => {
  return (
    <div id="work">
      <h1 className="head">Experience</h1>
      <h3>
        Web Development Intern{" "}
        <span style={{ float: "right" }}>November 2022 - December 2022</span>
      </h3>
      The Sparks Foundation
      <h1 className="head">Projects</h1>
      <Link className="link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/HETARTH7/Task-Manager-App"
      >
        <h3 className="text">To Do List</h3>
      </Link>
      <Link className="link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/HETARTH7/Notes-Keeper-App-Front-End"
      >
        <h3 className="text">Notes Keeper</h3>
      </Link>
      <Link className="link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/HETARTH7/XrossFit-FrontEnd"
      >
        <h3 className="text">Xross Fit</h3>
      </Link>
      <Link className="link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/HETARTH7/Password-Checker"
      >
        <h3 className="text">Password Checker</h3>
      </Link>
    </div>
  );
};

export default Work;
