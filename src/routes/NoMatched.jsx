import React from "react";
// IMPORT React Bootstrap Components
import { Container, Row, Col, Button } from "react-bootstrap";
// IMPORT React Router components
import { Link } from "react-router-dom";

function NoMatched() {
  // Styles in Theme for later use
  const Theme = `
  #msg404 {
    min-height: 80vh;
  }
  `;
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      id="msg404"
      fluid="lg"
    >
      <Row>
        <Col>
          <header>
            <h1 className="text-center font-monospace display-1 fw-bold">
              Oops! <mark className="text-danger">404</mark> error encountered
            </h1>
          </header>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button as={Link} to="/" size="lg" variant="danger">
            Go to Home
          </Button>
        </Col>
      </Row>
      {/* Use the styles of Theme */}
      <style type="text/css">{Theme}</style>
    </Container>
  );
}

export default NoMatched;
