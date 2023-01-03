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
              <li>
                <i class="fa-brands fa-js"></i>Javascript
              </li>
              <li>
                <i class="fa-brands fa-react"></i> ReactJS
              </li>
              <li>
                <i class="fa-brands fa-n"></i>NextJS
              </li>
              <li>Back End Development</li>
              <li>
                <i class="fa-brands fa-python"></i>Python
              </li>
              <li>
                <i class="fa-brands fa-php"></i>PHP
              </li>
              <li>
                <i class="fa-solid fa-database"></i>SQL, NOSQL
              </li>
              <li>
                <i class="fa-brands fa-node"></i>NodeJS
              </li>
              <li>
                <i class="fa-brands fa-js"></i>ExpressJS
              </li>
              <li>
                <i class="fa-solid fa-database"></i>MongoDB
              </li>
              <li>
                <i class="fa-solid fa-database"></i>MySQL
              </li>
              <li>
                <i class="fa-solid fa-c"></i>C/C++
              </li>
              <li>
                <i class="fa-brands fa-java"></i>Java
              </li>
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
