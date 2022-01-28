import React from "react";
// IMPORT React Bootstrap Components
import { Spinner, Container, Row, Col } from "react-bootstrap";

function Loading() {
  // Styles in Theme for later use
  const Theme = `
  #loadingSpinner{
    width: 7rem;
    height: 7rem;
  }
  #spinnerWrapper{
    min-height: 80%;
    min-height: 80vh;
  }
`;
  return (
    <Container
      fluid="lg"
      id="spinnerWrapper"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <Row>
        <Col>
          <Spinner
            animation="border"
            variant="primary"
            role="status"
            id="loadingSpinner"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      </Row>
      {/* Use the styles of Theme */}
      <style type="text/css">{Theme}</style>
    </Container>
  );
}
export default Loading;
