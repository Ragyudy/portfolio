import { Link } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ThemeToggle } from "./ThemeToggle";

export function NavBar() {
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
          <NavigationMenu.Item className="navbar-item">
            <NavigationMenu.Link className="navbar-link">
              <ThemeToggle />
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}
