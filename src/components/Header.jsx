import React from "react";
// IMPORT React Bootstrap Components
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
// IMPORT React Router components
import { NavLink } from "react-router-dom";
// IMPORT Assets
import DriveLogo from "../assets/google-drive.svg";
// IMPORT Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  // Styles in Theme for later use
  const Theme = `
  #headerBrand{
    -webkit-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    opacity: 0.85;
  }
  #headerBrand:hover{
    opacity: 1.0;
  }
  @media (max-width: 423px) {
    #headerLink{
      display: none !important;
    }
    #headerLogo{
      width: 2.5rem;
      height: 2.5rem;
    }
   }
    `;
  return (
    <Navbar
      className="bg-primary bg-gradient shadow-sm mb-1 p-2"
      variant="dark"
      sticky="top"
      expand="lg"
      collapseOnSelect
    >
      <Container fluid="lg">
        <Navbar.Brand id="headerBrand">
          <img
            alt="Google Drive"
            src={DriveLogo}
            width="30"
            height="30"
            className="align-top"
            id="headerLogo"
          />{" "}
          <p
            className="d-inline-block align-top fw-bold text-white m-0"
            id="headerLink"
          >
            {" "}
            Google Drive to Direct Link
          </p>
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbar-nav" />
        <NavbarCollapse id="navbar-nav">
          <Nav>
            {/* Link to home */}
            <Nav.Link as={NavLink} to="/" eventKey="1">
              <i className="bi bi-house-door-fill"> Home</i>
            </Nav.Link>
            <NavDropdown
              title={
                <i className="bi bi-arrow-return-right"> Native Google Files</i>
              }
            >
              {/* Link to slides */}
              <NavDropdown.Item as={NavLink} to="/slides" eventKey="2">
                <i className="bi bi-camera-reels-fill" /> Slides
              </NavDropdown.Item>
              {/* Link to documents */}
              <NavDropdown.Item as={NavLink} to="/docs" eventKey="3">
                <i className="bi bi-file-earmark-text-fill" /> Docs
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {/* Link to sheets */}
              <NavDropdown.Item as={NavLink} to="/sheets" eventKey="4">
                <i className="bi bi-bar-chart-fill" /> Sheets
              </NavDropdown.Item>
              {/* Link to drawings */}
              <NavDropdown.Item as={NavLink} to="/draw" eventKey="5">
                <i className="bi bi-brush-fill" />
                Drawings
              </NavDropdown.Item>
            </NavDropdown>
            {/* Link to reader */}
            <Nav.Link as={NavLink} to="/reader" eventKey="6">
              <i className="bi bi-book-fill"> Reader Mode</i>
            </Nav.Link>
            {/* Link to id */}
            <Nav.Link as={NavLink} to="/id" eventKey="7">
              <i className="bi bi-123"> With ID (Video, Audio, etc)</i>
            </Nav.Link>
            <Nav.Link
              onClick={(e) => {
                e.current.classList.remove("active");
              }}
              href="https://github.com/Nicolas-Orozco/Gdrive-converter"
              eventKey="8"
            >
              <i className="bi bi-github"> Github Repo</i>
            </Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Container>
      {/* Use the styles of Theme */}
      <style type="text/css">{Theme}</style>
    </Navbar>
  );
}

export default Header;
