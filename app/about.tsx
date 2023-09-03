import Image from "next/image";
import { Pacifico } from "next/font/google";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
const About = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="text-center mt-20 mb-44" id="about">
      <h1
        className={`${pacifico.className} text-6xl max-[600px]:text-4xl hover:underline hover:text-sky-500 pt-12`}
      >
        About Me
      </h1>
      <p className="text-2xl p-6 text-center">
        I am a Software Developer with ability to learn and collaborate in
        rapidly changing environments and compostions. Eager to tackle software
        developement/ design challanges to achieve lasting impacts on user
        experience.
      </p>
      <h1 className="text-2xl p-6 text-center">
        Technical Skills: Full Stack Development, Artificial Intelligence and
        Data Visualization
      </h1>
      <div className="min-[600px]:m-24">
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open(
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              "_blank"
            );
          }}
          alt="javascript logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://www.typescriptlang.org/", "_blank");
          }}
          alt="typescript logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://react.dev/", "_blank");
          }}
          alt="react logo"
        />
        {currentTheme === "dark" ? (
          <Image
            className="inline m-3"
            src="/next.svg"
            height="40"
            width="40"
            onClick={() => {
              window.open("https://nextjs.org/", "_blank");
            }}
            alt="nextjs logo"
          />
        ) : (
          <Image
            className="inline m-3"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            height="40"
            width="40"
            onClick={() => {
              window.open("https://nextjs.org/", "_blank");
            }}
            alt="nextjs logo"
          />
        )}
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://nodejs.org/en", "_blank");
          }}
          alt="nodejs logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://www.arduino.cc/", "_blank");
          }}
          alt="arduino logo"
        />
        <Image
          className="inline m-3"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://docs.oracle.com/en/java/", "_blank");
          }}
          src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg"
          alt="Java"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://babeljs.io/", "_blank");
          }}
          alt="babel logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://getbootstrap.com/", "_blank");
          }}
          alt="bootstrap logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://devdocs.io/c/", "_blank");
          }}
          alt="c logo"
        />
        <Image
          className="inline m-3"
          src="https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://devdocs.io/cpp/", "_blank");
          }}
          alt="cpp logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://expressjs.com/", "_blank");
          }}
          alt="express logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://firebase.google.com/", "_blank");
          }}
          alt="firebase logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open(
              "https://flask.palletsprojects.com/en/2.3.x/",
              "_blank"
            );
          }}
          alt="flask logo"
        />
        <Image
          className="inline"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://pandas.pydata.org/", "_blank");
          }}
          alt="pandas logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://git-scm.com/", "_blank");
          }}
          alt="git logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open(
              "https://developer.mozilla.org/en-US/docs/Web/HTML",
              "_blank"
            );
          }}
          alt="html5 logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://www.heroku.com/", "_blank");
          }}
          alt="heroku logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://jquery.com/", "_blank");
          }}
          alt="jquery logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://jupyter.org/", "_blank");
          }}
          alt="jupyter logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://mui.com/", "_blank");
          }}
          alt="materialui logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open(
              "https://in.mathworks.com/products/matlab.html",
              "_blank"
            );
          }}
          alt="matlab logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://www.mongodb.com/", "_blank");
          }}
          alt="mongodb logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://www.php.net", "_blank");
          }}
          alt="php logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://www.python.org/", "_blank");
          }}
          alt="python logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://www.r-project.org/", "_blank");
          }}
          alt="r logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://redux.js.org/", "_blank");
          }}
          alt="redux logo"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          height="40"
          width="40"
          onClick={() => {
            window.open("https://tailwindcss.com/", "_blank");
          }}
          alt="tailwindcss logo"
        />
        <Image
          className="inline m-3"
          src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg"
          alt="seaborn"
          width="40"
          onClick={() => {
            window.open("https://seaborn.pydata.org/", "_blank");
          }}
          height="40"
        />
        <Image
          className="inline m-3"
          src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
          alt="sqlite"
          width="40"
          onClick={() => {
            window.open("https://www.sqlite.org/index.html", "_blank");
          }}
          height="40"
        />
        <Image
          className="inline m-3"
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
          alt="scikit_learn"
          width="40"
          onClick={() => {
            window.open("https://scikit-learn.org/stable", "_blank");
          }}
          height="40"
        />
        <Image
          className="inline m-3"
          src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
          alt="postman"
          width="40"
          onClick={() => {
            window.open("https://www.postman.com/", "_blank");
          }}
          height="40"
        />
        <Image
          className="inline m-3"
          src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg"
          alt="mysql"
          width="40"
          onClick={() => {
            window.open("https://www.mysql.com/", "_blank");
          }}
          height="40"
        />
        <Image
          className="inline m-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          alt="docker"
          width="40"
          onClick={() => {
            window.open("https://www.docker.com/", "_blank");
          }}
          height="40"
        />
      </div>
    </div>
  );
};

export default About;
