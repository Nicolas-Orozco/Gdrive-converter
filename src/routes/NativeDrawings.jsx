import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import ConvTemplate from "../components/ConvTemplate";

function NativeDrawings() {
  const [format, setFormat] = useState("Select an export format");
  return (
    <Container fluid="lg">
      <Row>
        <Col className="p-4 mb-3">
          <header>
            <h1 className="display-5 fw-bold">
              Converter to <span className="text-danger">Google Drawings</span>
            </h1>
          </header>
          <hr />
          <section className="d-flex justify-content-between">
            <ButtonGroup vertical>
              <DropdownButton
                as={ButtonGroup}
                title={format}
                id="bg-vertical-dropdown-3"
                variant="info"
              >
                <Dropdown.Item
                  eventKey="1"
                  onClick={() => {
                    setFormat("SVG");
                  }}
                >
                  SVG
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="2"
                  onClick={() => {
                    setFormat("PDF");
                  }}
                >
                  PDF
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="3"
                  onClick={() => {
                    setFormat("PNG");
                  }}
                >
                  PNG
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="4"
                  onClick={() => {
                    setFormat("JPG");
                  }}
                >
                  JPG
                </Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
            {format === "Select an export format" ? (
              <i
                className="bi bi-emoji-smile-upside-down my-auto text-muted fs-1"
                alt="inverted smile emoji"
              />
            ) : (
              <i
                className="bi bi-emoji-smile my-auto text-black fs-1"
                alt="smile emoji"
              />
            )}
          </section>
          {(() => {
            switch (format) {
              case "SVG":
                return (
                  <ConvTemplate
                    propsConfig={{
                      inputSearchWord: "/edit?usp=sharing",
                      inputReplaceWith: "/export/svg",
                    }}
                  />
                );
              case "PDF":
                return (
                  <ConvTemplate
                    propsConfig={{
                      inputSearchWord: "/edit?usp=sharing",
                      inputReplaceWith: "/export/pdf",
                    }}
                  />
                );
              case "PNG":
                return (
                  <ConvTemplate
                    propsConfig={{
                      inputSearchWord: "/edit?usp=sharing",
                      inputReplaceWith: "/export/png",
                    }}
                  />
                );
              case "JPG":
                return (
                  <ConvTemplate
                    propsConfig={{
                      inputSearchWord: "/edit?usp=sharing",
                      inputReplaceWith: "/export/jpg",
                    }}
                  />
                );
              default:
                return null;
            }
          })()}
        </Col>
      </Row>
    </Container>
  );
}

export default NativeDrawings;
