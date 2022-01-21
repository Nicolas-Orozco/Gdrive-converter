import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { NavLink } from "react-router-dom";
import GdriveLogo from "../assets/google-drive.svg";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
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
      width: 40px;
      height: 40px;
    }
   }
    `;
  return (
    <Navbar
      className="bg-primary bg-gradient shadow-sm mb-1 p-2"
      variant="dark"
      sticky="top"
      expand="lg"
    >
      <Container fluid="lg">
        <Navbar.Brand id="headerBrand">
          <img
            alt="Google Drive"
            src={GdriveLogo}
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
            <Nav.Link as={NavLink} to="/" eventKey="1">
              <i className="bi bi-house-door-fill"> Home</i>
            </Nav.Link>
            <NavDropdown
              title={
                <i className="bi bi-arrow-return-right"> Native Google Files</i>
              }
            >
              <NavDropdown.Item as={NavLink} to="/slides" eventKey="2">
                <i className="bi bi-camera-reels-fill" /> Slides
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/docs" eventKey="3">
                <i className="bi bi-file-earmark-text-fill" /> Docs
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/sheets" eventKey="4">
                <i className="bi bi-bar-chart-fill" /> Sheets
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/draw" eventKey="5">
                <i className="bi bi-brush-fill" />
                Drawings
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/reader" eventKey="6">
              <i className="bi bi-book-fill"> Reader Mode</i>
            </Nav.Link>
            <Nav.Link
              onClick={(e) => {
                e.target.classList.remove("active");
              }}
              href="https://github.com/Nicolas-Orozco/Gdrive-converter"
            >
              <i className="bi bi-github"> Github Repo</i>
            </Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Container>
      <style type="text/css">{Theme}</style>
    </Navbar>
  );
}

export default Header;
