import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { links } from "../data";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full md:flex items-center justify-between p-4">
      <Link className={`${dancingScript.className} text-2xl`} href="/">
        {"<Hetarth />"}
      </Link>
      <ul className="hidden md:flex justify-center me-10">
        {links.map((link, index) => (
          <li className="ms-5 me-5 py-2" key={index}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden float-end">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="size-7" />
        </button>
      </div>
      <div className="hidden md:flex">
        {currentTheme === "dark" ? (
          <button onClick={() => setTheme("light")}>
            <FontAwesomeIcon className="size-7" icon={faSun} />
          </button>
        ) : (
          <button onClick={() => setTheme("dark")}>
            <FontAwesomeIcon className="size-7" icon={faMoon} />
          </button>
        )}
      </div>
      <ul hidden={!isOpen} className="md:hidden justify-center me-10">
        {links.map((link, index) => (
          <li className="ms-5 me-5 py-2" key={index}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
