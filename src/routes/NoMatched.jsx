import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NoMatched() {
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
          <h1 className="text-center font-monospace display-1 fw-bold">
            Oops! <mark className="text-danger">404</mark> error encountered
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button as={Link} to="/" size="lg" variant="danger">
            Go to Home
          </Button>
        </Col>
      </Row>
      <style type="text/css">{Theme}</style>
    </Container>
  );
}

export default NoMatched;
