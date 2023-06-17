"use client";
import { ThemeProvider } from "next-themes";
import Navbar from "./navbar";
import Projects from "./projects";
import About from "./about";
import Footer from "./footer";
import Contact from "./contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="home" className="pt-32 ml-80 h-screen max-[600px]:ml-0">
        <h1 className="text-2xl">HELLO THERE</h1>
        <h1 className="text-6xl">I&apos;m Hetarth Raval</h1>
        <h1 className="text-4xl">A Full Stack Developer</h1>
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
