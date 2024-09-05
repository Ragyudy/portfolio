import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

type NavBarProps = {
  scrollToAbout: () => void;
  scrollToProjects: () => void;
};

const CustomNavbar = styled(Navbar)`
  position: absolute;
  width: 100%;
  z-index: 100;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
`;

const CustomNavbarToggle = styled(Navbar.Toggle)`
  border: none;
  padding: 8px 15px;
  margin-left: auto;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // max-width: 1000px;
  margin: 0 auto;
`;

const RightNav = styled(Nav)`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const CustomNavLink = styled(Nav.Link)`
  text-weight: none;
  font-size: 1.2rem;
  padding: 10px 20px;
  margin: 0 10px;
  position: relative;
  text-decoration: none;
  transition: color 0.1s ease;

  /* Pseudo-element for the underline */
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black; /* Set the color of the underline */
    transition: width 0.3s ease;
  }

  /* Hover effect for the link */
  &:hover {
    color: #007bff; /* Change the color on hover */
  }

  /* Underline animation on hover */
  &:hover::after {
    width: 100%;
  }
`;

const NavBar: React.FC<NavBarProps> = ({ scrollToAbout, scrollToProjects }) => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavClick = (callback: () => void) => {
    callback();
    setExpanded(false);
  };

  return (
    <CustomNavbar expanded={expanded} expand="sm">
      {/* <CenteredContainer> */}
      {/* <Navbar.Brand href="/">ragyudy</Navbar.Brand> */}
      <CustomNavbarToggle
        aria-controls="basic-navbar-nav"
        onClick={handleToggle}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <RightNav>
          <CustomNavLink onClick={() => handleNavClick(scrollToAbout)}>
            About
          </CustomNavLink>
          <CustomNavLink onClick={() => handleNavClick(scrollToProjects)}>
            Projects
          </CustomNavLink>
          <CustomNavLink href="https://linkedin.com/in/gradyyu">
            LinkedIn
          </CustomNavLink>
        </RightNav>
      </Navbar.Collapse>
      {/* </CenteredContainer> */}
    </CustomNavbar>
  );
};

export default NavBar;
