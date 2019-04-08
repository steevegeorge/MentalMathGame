import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const Options = props => {
  return (
    <div className="option-container">
      <Button
        variant="contained"
        color="custom"
        className="option-button"
        onClick={() => {
          props.setQuestionType("+");
        }}
      >
        +
      </Button>
      <Button
        variant="contained"
        color="custom"
        className="option-button"
        onClick={() => {
          props.setQuestionType("-");
        }}
      >
        -
      </Button>
      <Button
        variant="contained"
        color="custom"
        className="option-button"
        onClick={() => {
          props.setQuestionType("x");
        }}
      >
        x
      </Button>
      <Button
        variant="contained"
        color="custom"
        className="option-button"
        onClick={() => {
          props.setQuestionType("÷");
        }}
      >
        ÷
      </Button>
    </div>
  );
};

Options.propTypes = {
  setQuestionType: PropTypes.func.isRequired
};

export default Options;
