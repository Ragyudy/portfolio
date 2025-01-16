import { About } from "./components/About";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
// import { Reel } from "./components/Reel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/reel" element={<Reel />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
