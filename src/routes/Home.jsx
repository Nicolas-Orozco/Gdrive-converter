/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function Home() {
  return (
    <main>
      <Container fluid="lg">
        <Row>
          <Col className="p-4">
            <header>
              <h1 className="display-4 fw-bold">
                Welcome!{" "}
                <i
                  className="bi bi-emoji-wink-fill d-inline-block align-middle text-primary"
                  width="30"
                  height="30"
                  id="emojiWink"
                  alt="Emoji making a wink"
                />
              </h1>
              <p className="lead">
                As you may be thinking, this is a tool to convert share links
                from Google Drive to direct downloads, without the need to enter
                the site and click a button.
              </p>
            </header>
            <hr className="my-4" />
            <h2 className="display-5 fw-bold">Before you proceed</h2>
            <p className="lead">You need to do some steps:</p>
            <ListGroup as="ol" numbered horizontal="md">
              <ListGroup.Item as="li" action variant="info">
                Set the visibility of your file to &quot;Anyone with the
                link&quot;, if you want to avoid manually granting access to the
                download.
              </ListGroup.Item>
              <ListGroup.Item as="li" action variant="info">
                Copy the link to share your file
              </ListGroup.Item>
              <ListGroup.Item as="li" action variant="info">
                Select an option to convert in the menu above.
              </ListGroup.Item>
              <ListGroup.Item as="li" action variant="info">
                Enjoy!
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Home;
