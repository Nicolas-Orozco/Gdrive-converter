import React from "react";
// IMPORT React Bootstrap Components
import { Container, Row, Col } from "react-bootstrap";
// IMPORT Converter component
import ConvTemplate from "../components/ConvTemplate";

function Reader() {
  return (
    <Container fluid="lg">
      <Row>
        <Col className="p-4 mb-3">
          <h1 className="display-5 fw-bold">
            Converter to <span className="text-secondary">Reader Mode</span>
          </h1>
          <hr />
          {/* Render converter searching edit and replacing preview */}
          <ConvTemplate
            propsConfig={{
              inputSearchWord: "/edit",
              inputReplaceWith: "/preview",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Reader;
