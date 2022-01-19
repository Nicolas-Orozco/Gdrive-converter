import React, { useState } from "react";
import {
  Form,
  ButtonGroup,
  Button,
  ButtonToolbar,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import PropTypes from "prop-types";

function ConvTemplate({ propsConfig: { inputSearchWord, inputReplaceWith } }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Just an output?");
  const btnConvert = () => {
    if (input.search(inputSearchWord) > 0 || input.length >= 90) {
      setOutput(input.replace(inputSearchWord, inputReplaceWith));
    } else {
      setOutput("Invalid Link");
    }
  };
  const btnCopy = () => {
    if (output !== "Invalid Link" && output !== "Can't copy empty output") {
      navigator.clipboard.writeText(output);
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
                Convert
              </Button>
              <Button variant="success" onClick={btnCopy}>
                Copy Output
              </Button>
              <Button variant="danger" onClick={btnDelete}>
                Clear Input
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
