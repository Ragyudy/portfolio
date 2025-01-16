import { Link } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className="navbar-container">
      <NavigationMenu.Root>
        <NavigationMenu.List className="navbar-list">
          <NavigationMenu.Item className="navbar-item">
            <NavigationMenu.Link asChild>
              <Link to="/" className="navbar-link">
                Hello
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="navbar-item">
            <NavigationMenu.Link asChild>
              <Link to="/about" className="navbar-link">
                About
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="navbar-item">
            <NavigationMenu.Link asChild>
              <Link to="/projects" className="navbar-link">
                Projects
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          {/* <NavigationMenu.Item className="navbar-item">
            <NavigationMenu.Link asChild>
              <Link to="/reel" className="navbar-link">
                Reel
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item> */}
          <NavigationMenu.Item className="navbar-item">
            <NavigationMenu.Link className="navbar-link">
              <ThemeToggle />
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      {isOpen && (
        <div className={`fullscreen-modal ${isClosing ? "closing" : ""}`}>
          <button className="close-modal" onClick={closeMenu}>
            &times;
          </button>
          <nav className="modal-nav">
            <Link to="/" className="modal-link" onClick={closeMenu}>
              Hello
            </Link>
            <Link to="/about" className="modal-link" onClick={closeMenu}>
              About
            </Link>
            <Link to="/projects" className="modal-link" onClick={closeMenu}>
              Projects
            </Link>
            {/* <Link to="/reel" className="modal-link" onClick={closeMenu}>
              Reel
            </Link> */}
            <ThemeToggle />
          </nav>
          <div className="social-links">
            <a
              href="mailto:grady.yu@yale.edu"
              className="social-link"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/Ragyudy"
              className="social-link"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/gradyyu"
              className="social-link"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
