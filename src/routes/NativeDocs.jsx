import React, { useState } from "react";
// IMPORT React Bootstrap Components
import {
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
// IMPORT Converter component
import ConvTemplate from "../components/ConvTemplate";
// IMPORT Custom hook
import useEmojiFace from "../hooks/useEmojiFace";

function NativeDocs() {
  // State for export format
  const [format, setFormat] = useState("Select an export format");
  // Hook for is emoji
  const isEmojiFace = useEmojiFace(format);
  return (
    <Container fluid="lg">
      <Row>
        <Col className="p-4 mb-3">
          <header>
            <h1 className="display-5 fw-bold">
              Converter to{" "}
              <span className="text-primary">Google Documents</span>
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
                {/* // Change format to PDF */}
                <Dropdown.Item
                  eventKey="1"
                  onClick={() => {
                    setFormat("PDF");
                  }}
                >
                  PDF
                </Dropdown.Item>
                {/* // Change format to DOC */}
                <Dropdown.Item
                  eventKey="2"
                  onClick={() => {
                    setFormat("DOC");
                  }}
                >
                  DOC
                </Dropdown.Item>
                {/* // Change format to ODT */}
                <Dropdown.Item
                  eventKey="3"
                  onClick={() => {
                    setFormat("ODT");
                  }}
                >
                  ODT
                </Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
            {/* Render emoji with conditions of true and false */}
            {isEmojiFace && (
              <i
                className="bi bi-emoji-smile my-auto text-black fs-1"
                alt="smile emoji"
              />
            )}
          </section>
          {(() => {
            // Render converter, props depending of format
            switch (format) {
              case "PDF":
                return (
                  <ConvTemplate
                    propsConfig={{
                      inputSearchWord: "/edit?usp=sharing",
                      inputReplaceWith: "/export?format=pdf",
                    }}
                  />
                );
              case "DOC":
                return (
                  <ConvTemplate
                    propsConfig={{
                      inputSearchWord: "/edit?usp=sharing",
                      inputReplaceWith: "/export?format=doc",
                    }}
                  />
                );
              case "ODT":
                return (
                  <ConvTemplate
                    propsConfig={{
                      inputSearchWord: "/edit?usp=sharing",
                      inputReplaceWith: "/export?format=odt",
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

export default NativeDocs;
