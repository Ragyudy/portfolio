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
  position: fixed;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 100;
`;

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const RightNav = styled(Nav)`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const NavBar: React.FC<NavBarProps> = ({ scrollToAbout, scrollToProjects }) => {
  return (
    <CustomNavbar expand="sm">
      <CenteredContainer>
        <Navbar.Brand href="/">ragyudy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <RightNav>
            <Nav.Link onClick={scrollToAbout}>About</Nav.Link>
            <Nav.Link onClick={scrollToProjects}>Projects</Nav.Link>
            <Nav.Link href="https://linkedin.com/in/gradyyu">LinkedIn</Nav.Link>
          </RightNav>
        </Navbar.Collapse>
      </CenteredContainer>
    </CustomNavbar>
  );
};

export default NavBar;
