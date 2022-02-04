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

function NativeSheets() {
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
              Converter to <span className="text-success">Google Sheets</span>
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
                {/* // Change format to CSV */}
                <Dropdown.Item
                  eventKey="1"
                  onClick={() => {
                    setFormat("CSV");
                  }}
                >
                  CSV
                </Dropdown.Item>
                {/* // Change format to XLSX */}
                <Dropdown.Item
                  eventKey="2"
                  onClick={() => {
                    setFormat("XLSX");
                  }}
                >
                  XLSX
                </Dropdown.Item>
                {/* // Change format to PDF */}
                <Dropdown.Item
                  eventKey="3"
                  onClick={() => {
                    setFormat("PDF");
                  }}
                >
                  PDF
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
              case "CSV":
                return (
                  <ConvTemplate
                    propsConfig={{
                      inputSearchWord: "/edit?usp=sharing",
                      inputReplaceWith: "/export?format=csv",
                    }}
                  />
                );
              case "XLSX":
                return (
                  <ConvTemplate
                    propsConfig={{
                      inputSearchWord: "/edit?usp=sharing",
                      inputReplaceWith: "/export?format=xlsx",
                    }}
                  />
                );
              case "PDF":
                return (
                  <ConvTemplate
                    propsConfig={{
                      inputSearchWord: "/edit?usp=sharing",
                      inputReplaceWith: "/export?format=pdf",
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

export default NativeSheets;
