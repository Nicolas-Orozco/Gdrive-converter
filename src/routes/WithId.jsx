import React from "react";
// IMPORT React Bootstrap Components
import { Container, Row, Col, Accordion } from "react-bootstrap";
// IMPORT Converter component
import ConvTemplate from "../components/ConvTemplate";

function WithId() {
  return (
    <Container fluid="lg">
      <Row>
        <Col className="p-4 mb-3">
          <header>
            <h1 className="display-5 fw-bold">
              Converter <span className="text-secondary">with ID</span>
            </h1>
            <p className="lead">
              <span className="text-warning text-uppercase fw-bold">
                Important:
              </span>
              To use this mode you only need to put the ID of your file on the
              input.
            </p>
          </header>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Example to get the ID:</Accordion.Header>
              <Accordion.Body>
                <p className="lead mb-1">We got a Link :</p>
                <code>
                  https://drive.google.com/file/d/1tvHrCBnzKByMSxPkVJ2ei5yR6vZwnA5q/view?usp=sharing
                </code>
                <p className="lead mt-1 mb-1">
                  The ID of the file is always after the &quot;/d/&quot; and
                  before the &quot;/view&quot; or &quot;/edit&quot; parts of
                  your share link,
                  <b> meaning that the ID of our link will be:</b>
                </p>
                <code>1tvHrCBnzKByMSxPkVJ2ei5yR6vZwnA5q</code>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <hr />
          {/* Render Converter using concatenation */}
          <ConvTemplate
            propsConfig={{
              inputUseConcat: true,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default WithId;
