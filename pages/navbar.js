import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link className="nav-links" href="/">
        Home
      </Link>
      <Link className="nav-links" href="/projects">
        Projects
      </Link>
      <Link className="nav-links" href="/resume">
        Resume
      </Link>
      <Link className="nav-links" href="/blog">
        Blog
      </Link>
      <Link className="nav-links" href="/contact">
        Contact Me
      </Link>
    </nav>
  );
};

export default Navbar;
