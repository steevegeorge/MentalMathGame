import React from "react";
import PropTypes from "prop-types";

const Question = props => {
  return (
    <div>
      {props.firstRand} {props.operator} {props.secondRand}
    </div>
  );
};

Question.propTypes = {
  firstRand: PropTypes.number.isRequired,
  secondRand: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired
};

export default Question;
