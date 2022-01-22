import React, { useState, useRef } from "react";
import {
  Form,
  ButtonGroup,
  Button,
  ButtonToolbar,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import PropTypes from "prop-types";
import "bootstrap-icons/font/bootstrap-icons.css";

function ConvTemplate({ propsConfig: { inputSearchWord, inputReplaceWith } }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Just an output?");
  const RefConvert = useRef();
  const RefCopy = useRef();
  const btnConvert = () => {
    if (input.search(inputSearchWord) > 0 || input.length >= 65) {
      setOutput(input.replace(inputSearchWord, inputReplaceWith));
      RefConvert.current.classList.replace("bi-boombox-fill", "bi-check-lg");
      setTimeout(() => {
        RefConvert.current.classList.replace("bi-check-lg", "bi-boombox-fill");
      }, 1500);
    } else {
      setOutput("Invalid Link");
    }
  };
  const btnCopy = () => {
    if (output !== "Invalid Link" && output !== "Can't copy empty output") {
      navigator.clipboard.writeText(output);
      RefCopy.current.classList.replace("bi-pencil-fill", "bi-check-lg");
      setTimeout(() => {
        RefCopy.current.classList.replace("bi-check-lg", "bi-pencil-fill");
      }, 1500);
    } else {
      setOutput("Can't copy empty output");
    }
  };
  const btnDelete = () => {
    setInput("");
  };
  return (
    <article>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          btnConvert();
        }}
        className="bg-light rounded-3 p-3 "
      >
        <Form.Group>
          <Form.Label
            className="lead fw-bold text-uppercase mb-2"
            id="inputLabel"
          >
            input
          </Form.Label>
          <ButtonToolbar
            className="justify-content-center"
            aria-label="Toolbar with Button groups"
          >
            <InputGroup className="w-100">
              <FormControl
                type="url"
                placeholder="Replace me"
                aria-label="Input group example"
                aria-describedby="inputLabel"
                value={input}
                maxLength="125"
                onChange={(e) => setInput(e.target.value)}
                className="shadow-sm"
              />
            </InputGroup>
            <ButtonGroup
              aria-label="Control Convert, Copy, and Clear buttons"
              size="lg mx-2 my-3"
              className="shadow"
            >
              <Button variant="primary" onClick={btnConvert} type="submit">
                Convert <i className="bi bi-boombox-fill" ref={RefConvert} />
              </Button>
              <Button variant="success" onClick={btnCopy}>
                Copy Output <i className="bi bi-pencil-fill" ref={RefCopy} />
              </Button>
              <Button variant="danger" onClick={btnDelete}>
                Clear Input <i className="bi bi-eraser-fill" />
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Form.Group>
        <Form.Group>
          <Form.Label className="lead fw-bold text-uppercase mb-2">
            output:
          </Form.Label>
          <FormControl
            type="url"
            value={output}
            readOnly
            aria-label="Input group example"
            className="shadow-sm"
          />
        </Form.Group>
      </Form>
    </article>
  );
}
ConvTemplate.propTypes = {
  propsConfig: PropTypes.shape({
    inputSearchWord: PropTypes.string,
    inputReplaceWith: PropTypes.string,
  }).isRequired,
};

export default ConvTemplate;
