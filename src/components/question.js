import React from "react";
import PropTypes from "prop-types";

const Question = ({ firstRand, operator, secondRand, gameStarted }) => {
  if (gameStarted) {
    return (
      <div style={{ marginTop: "85px" }}>
        {firstRand} {operator} {secondRand}
      </div>
    );
  } else {
    return (
      <div
        style={{ fontSize: "40px", marginBottom: "20px", marginTop: "100px" }}
      >
        Click Start to Begin
      </div>
    );
  }
};

Question.propTypes = {
  firstRand: PropTypes.number.isRequired,
  secondRand: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired,
  gameStarted: PropTypes.bool.isRequired
};

export default Question;
