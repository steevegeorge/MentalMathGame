import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const Options = props => {
  return (
    <div className="option-container">
      <div className="option-button-container">
        <div className="option-button">
          <Button
            variant="contained"
            color="custom"
            onClick={() => {
              props.setQuestionType("+");
            }}
          >
            +
          </Button>
        </div>
        <div className="option-button">
          <Button
            variant="contained"
            color="custom"
            onClick={() => {
              props.setQuestionType("-");
            }}
          >
            -
          </Button>
        </div>
        <div className="option-button">
          <Button
            variant="contained"
            color="custom"
            onClick={() => {
              props.setQuestionType("x");
            }}
          >
            x
          </Button>
        </div>
        <div className="option-button">
          <Button
            variant="contained"
            color="custom"
            onClick={() => {
              props.setQuestionType("÷");
            }}
          >
            ÷
          </Button>
        </div>
      </div>
    </div>
  );
};

Options.propTypes = {
  setQuestionType: PropTypes.func.isRequired
};

export default Options;
