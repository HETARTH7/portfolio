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
      <Link href="" className="icon" onClick={icon}>
        <i className="fa fa-bars"></i>
      </Link>
      <Link href="/about">About</Link>
      <Link href="/#work">Work</Link>
      <Link href="/">Home</Link>
    </nav>
  );
};

export default Navbar;
