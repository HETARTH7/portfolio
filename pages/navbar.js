import Link from "next/link";

const Navbar = () => {
  const icon = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  return (
    <nav className="topnav" id="myTopnav">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact Me</Link>
      <Link href="" className="icon" onClick={icon}>
        <i className="fa fa-bars"></i>
      </Link>
    </nav>
  );
};

export default Navbar;
