import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { FaMoon, FaMusic } from "react-icons/fa";

const CustomNavbar = styled(Navbar)`
  position: fixed;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000;
`;

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const CenterNav = styled(Nav)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  gap: 25px;
`;

const RightNav = styled(Nav)`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

function NavBar() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CustomNavbar expand="lg">
      <CenteredContainer>
        <Navbar.Brand href="/">ragyudy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <RightNav>
            <Nav.Link href="#about">About</Nav.Link>
            {/* <Nav.Link href="#education">Education</Nav.Link> */}
            {/* <Nav.Link href="#experience">Experience</Nav.Link> */}
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="https://linkedin.com/in/gradyyu">LinkedIn</Nav.Link>
          </RightNav>
          {/* <RightNav>
            <Nav.Link>
              <FaMoon />
            </Nav.Link>
            <Nav.Link>{time}</Nav.Link>
            <Nav.Link href="#music">
              <FaMusic />
            </Nav.Link>
          </RightNav> */}
        </Navbar.Collapse>
      </CenteredContainer>
    </CustomNavbar>
  );
}

export default NavBar;
