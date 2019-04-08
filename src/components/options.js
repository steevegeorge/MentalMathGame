import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const Options = ({ setQuestionType }) => {
  return (
    <div className="option-container">
      <div className="option-button-container">
        <div className="option-button">
          <Button
            className="button"
            variant="contained"
            onClick={() => {
              setQuestionType("+");
            }}
          >
            +
          </Button>
        </div>
        <div className="option-button">
          <Button
            className="button"
            variant="contained"
            onClick={() => {
              setQuestionType("-");
            }}
          >
            -
          </Button>
        </div>
        <div className="option-button">
          <Button
            className="button"
            variant="contained"
            onClick={() => {
              setQuestionType("x");
            }}
          >
            x
          </Button>
        </div>
        <div className="option-button">
          <Button
            className="button"
            variant="contained"
            onClick={() => {
              setQuestionType("÷");
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
