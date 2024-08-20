import GlobalStyle from "./GlobalStyle";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Home />
      <About />
      {/* <Education /> */}
      {/* <Experience /> */}
      <Projects />
    </>
  );
}

export default App;
