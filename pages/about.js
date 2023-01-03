import Navbar from "./navbar";
import Footer from "./footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div id="about">
        <div className="up">
          <div className="aboutme">
            <h2 className="head">I&apos;m Hetarth,</h2>
            <h2 className="head">a web developer.</h2>
            <p className="text">
              Hello there! I am a Computer Science undergradute at
            </p>
            <p className="text">Vellore Institute of Technology, Vellore.</p>
            <p className="text">
              I&apos;m a passionate web developer and am trying to
            </p>
            <p className="text">level up my UX/UI designing skills.</p>
          </div>

          <div className="skills">
            <h1 className="head">Skills</h1>
            <ul>
              <li>Front End Development</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>Back End Development</li>
              <li>Python</li>
              <li>PHP</li>
              <li>SQL, NOSQL</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>C/C++</li>
              <li>Java</li>
            </ul>
          </div>
        </div>
        <div className="down">
          <div className="interests">
            <h1 className="head">I like</h1>
            <ul>
              <li className="text">Football</li>
              <li className="text">Star Wars</li>
              <li className="text">Pop Music and Classic Rock</li>
              <li className="text">Sketching</li>
            </ul>
          </div>
          <div className="learning">
            <h1 className="head">I&apos;m learning</h1>
            <ul>
              <li className="text">Machine Learning</li>
              <li className="text">French</li>
              <li className="text">Spanish</li>
              <li className="text">Light Saber fighting</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
