import React from "react";
// IMPORT React Bootstrap Components
import { Navbar, Container } from "react-bootstrap";
// IMPORT Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  // Styles in Theme for later use
  const Theme = `
  #footerHeartIcon{
    -webkit-animation : grow 2s infinite alternate;
            animation : grow 2s infinite alternate;
  }
  @media (prefers-reduced-motion : no-preference) {
    @-webkit-keyframes grow{
      from {
        -webkit-transform: scale(0.8);
                transform: scale(0.8);
      }
      to {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
    }
    @keyframes grow{
      from {
        -webkit-transform: scale(0.8);
                transform: scale(0.8);
      }
      to {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
    }
  }
    `;
  return (
    <footer>
      <Navbar fixed="bottom" className="bg-light" variant="light">
        <Container className="justify-content-center">
          <Navbar.Brand>
            Made with
            <i
              className="bi bi-suit-heart-fill d-inline-block align-center m-1 text-dark"
              width="20"
              height="20"
              id="footerHeartIcon"
              alt="Heart"
            />
            in Peru
          </Navbar.Brand>
        </Container>
        {/* Use the styles of Theme */}
        <style type="text/css">{Theme}</style>
      </Navbar>
    </footer>
  );
}

export default Footer;
