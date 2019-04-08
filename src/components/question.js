import React from "react";
import PropTypes from "prop-types";

const Question = ({ firstRand, operator, secondRand }) => {
  return (
    <div>
      {firstRand} {operator} {secondRand}
    </div>
  );
};

Question.propTypes = {
  firstRand: PropTypes.number.isRequired,
  secondRand: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired
};

export default Question;
