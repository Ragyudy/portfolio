import { useRef } from "react";
import GlobalStyle from "./GlobalStyle";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
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
      <Projects ref={projectsRef} />
    </>
  );
}

export default App;
