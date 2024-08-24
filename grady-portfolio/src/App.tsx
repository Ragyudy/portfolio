import { useRef } from "react";
import GlobalStyle from "./GlobalStyle";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import BackgroundContainer from "./components/Background";

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
      <BackgroundContainer />
      <NavBar
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
      />
      <Home scrollToAbout={scrollToAbout} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
    </>
  );
}

export default App;
