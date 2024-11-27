import { Link } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar-container">
      <NavigationMenu.Root>
        <NavigationMenu.List className="navbar-list">
          <NavigationMenu.Item className="navbar-item">
            <NavigationMenu.Link asChild>
              <Link to="/home" className="navbar-link">
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
          <NavigationMenu.Item className="navbar-item">
            <NavigationMenu.Link asChild>
              <Link to="/reel" className="navbar-link">
                Reel
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
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
        <div className="fullscreen-modal">
          <button className="close-modal" onClick={closeMenu}>
            &times;
          </button>
          <nav className="modal-nav">
            <Link to="/home" className="modal-link" onClick={closeMenu}>
              Hello
            </Link>
            <Link to="/about" className="modal-link" onClick={closeMenu}>
              About
            </Link>
            <Link to="/projects" className="modal-link" onClick={closeMenu}>
              Projects
            </Link>
            <Link to="/reel" className="modal-link" onClick={closeMenu}>
              Reel
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      )}
    </div>
  );
}
