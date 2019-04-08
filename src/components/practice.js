import React from "react";
import Question from "./question";
import PropTypes from "prop-types";

const Practice = props => {
  return (
    <div className="practice-area">
      <div className="question-container">
        <div className="question">
          <Question
            firstRand={props.firstRand}
            secondRand={props.secondRand}
            operator={props.operator}
          />
        </div>
      </div>

      <div className="answer-container">
        <textarea className="input" onKeyUp={props.onKeyUp} id="answer" />
      </div>
    </div>
  );
};

Practice.propTypes = {
  firstRand: PropTypes.number.isRequired,
  secondRand: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired,
  onKeyUp: PropTypes.func.isRequired
};

export default Practice;
