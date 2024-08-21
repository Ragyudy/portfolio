import { useRef } from "react";
import GlobalStyle from "./GlobalStyle";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <GlobalStyle />
      <NavBar
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
      />
      <Home />
      <About ref={aboutRef} />
      {/* <Education /> */}
      {/* <Experience /> */}
      <Projects ref={projectsRef} />
    </>
  );
}

export default App;
