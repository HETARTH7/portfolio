import Link from "next/link";

const Footer = () => {
  return (
    <div id="contact footer">
      <h1>Contact</h1>
      <Link className="link" href="https://www.instagram.com/hetarth.7/">
        Instagram
      </Link>
      <Link
        className="link"
        href="https://www.linkedin.com/in/hetarth-raval-936462218/"
      >
        Linkedin
      </Link>
      <Link className="link" href="https://github.com/HETARTH7">
        GitHub
      </Link>
      <Link
        className="link"
        href="https://stackoverflow.com/users/16973267/hetarth7"
      >
        Stackoverflow
      </Link>
      <Link className="link" href="mailto:hetarth002@gmail.com">
        Email
      </Link>
    </div>
  );
};

export default Footer;