import Navbar from "./navbar";
import About from "./about";
import Work from "./work";
import Projects from "./projects";
import Connect from "./connect";
export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Work />
      <Projects />
      <Connect />
    </div>
  );
}
