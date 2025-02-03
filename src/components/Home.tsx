import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function Home() {
  return (
    <div className="home" id="/">
      <h1 className="home-title">Grady Yu</h1>
      <div className="social-links home-links">
        <a
          href="mailto:grady.yu@yale.edu"
          className="social-link home-link"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Ragyudy"
          className="social-link home-link"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/gradyyu"
          className="social-link home-link"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
