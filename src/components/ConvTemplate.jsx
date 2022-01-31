import React, { useState } from "react";
// IMPORT React Bootstrap Components
import {
  Form,
  ButtonGroup,
  Button,
  ButtonToolbar,
  InputGroup,
  FormControl,
} from "react-bootstrap";
// IMPORT Proptypes
import PropTypes from "prop-types";
// IMPORT Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

function ConvTemplate({
  // Define default parameters
  propsConfig: {
    inputUseConcat = false,
    inputSearchWord = "",
    inputReplaceWith = "",
  },
}) {
  // Store input in state
  const [input, setInput] = useState("");
  // Store output in state
  const [output, setOutput] = useState("Just an output?");
  // Manage form in state
  const [form, setForm] = useState(false);
  // Manage convert icon class
  const [iconConvert, setIconConvert] = useState("bi-boombox-fill");
  // Manage copy icon class
  const [iconCopy, setIconCopy] = useState("bi-pencil-fill");
  // Arrow function onClick Convert
  const btnConvert = () => {
    // Control converter according UseConcat prop
    switch (inputUseConcat) {
      case true:
        // Check minimum length
        if (input.length >= 25) {
          // Validate Form
          setForm(true);
          // Convert in output
          setOutput(`https://drive.google.com/uc?export=download&id=${input}`);
          // Appear and dissapear check icon
          setIconConvert("bi-check-lg");
          setTimeout(() => {
            setIconConvert("bi-boombox-fill");
          }, 1500);
        } else {
          // Invalidate form
          setForm(false);
          // Send error
          setOutput("Invalid ID");
        }
        break;
      case false:
        // Check if the word exists | Check minimum length
        if (input.search(inputSearchWord) > 0 || input.length >= 65) {
          // Validate Form
          setForm(true);
          // Convert in output
          setOutput(input.replace(inputSearchWord, inputReplaceWith));
          // Appear and dissapear check icon
          setIconConvert("bi-check-lg");
          setTimeout(() => {
            setIconConvert("bi-boombox-fill");
          }, 1500);
        } else {
          // Invalidate form
          setForm(false);
          // Send error
          setOutput("Invalid Link");
        }
        break;
      default:
        return null;
    }
    return undefined;
  };
  // Arrow function onClick Copy
  const btnCopy = () => {
    // Check if form is valid
    if (form === true) {
      // Copy output to clipboard
      navigator.clipboard.writeText(output);
      // Appear and dissapear check icon
      setIconCopy("bi-check-lg");
      setTimeout(() => {
        setIconCopy("bi-pencil-fill");
      }, 1500);
    } else {
      // Invalidate form
      setForm(false);
      // Send Error
      setOutput("Can't copy empty output");
    }
  };
  // Arrow function onClick Delete
  const btnDelete = () => {
    // Empty input
    setInput("");
  };
  return (
    <article>
      <Form
        onSubmit={(e) => {
          // Prevent refresh of page
          e.preventDefault();
          // Execute convert
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
                placeholder="Replace me"
                aria-label="Input group example"
                aria-describedby="inputLabel"
                value={
                  // Use the value of state
                  input
                }
                maxLength="125"
                onChange={
                  // Pass the value of input to state
                  (e) => setInput(e.target.value)
                }
                className="shadow-sm"
              />
            </InputGroup>
            <ButtonGroup
              aria-label="Control Convert, Copy, and Clear buttons"
              size="lg mx-2 my-3"
              className="shadow"
            >
              <Button variant="primary" onClick={btnConvert} type="submit">
                {/* Use icon convert state as class */}
                Convert <i className={`bi ${iconConvert}`} />
              </Button>
              <Button variant="success" onClick={btnCopy}>
                {/* Use icon copy state as class */}
                Copy Output <i className={`bi ${iconCopy}`} />
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
            value={
              // Use the value of state
              output
            }
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
  // Define prop types
  propsConfig: PropTypes.shape({
    inputSearchWord: PropTypes.string,
    inputReplaceWith: PropTypes.string,
    inputUseConcat: PropTypes.bool,
  }).isRequired,
};
export default ConvTemplate;
