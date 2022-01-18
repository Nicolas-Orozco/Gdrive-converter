import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ConvTemplate from "../components/ConvTemplate";

function Reader() {
  return (
    <Container fluid="lg">
      <Row>
        <Col className="p-4 mb-3">
          <h1 className="display-5 fw-bold">Converter to Reader Mode</h1>
          <hr />
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
