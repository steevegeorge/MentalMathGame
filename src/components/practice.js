import React, { useState } from "react";
import Question from "./question";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Answer = ({ answer, showAnswer }) => {
  if (showAnswer) {
    return (
      <div className="output" id="answer">
        {answer}
      </div>
    );
  } else {
    return <div className="output" id="answer" />;
  }
};

const Progress = ({ setShowAnswer, nextQuestion }) => {
  const [showNext, setShowNext] = useState(false);

  if (showNext) {
    return (
      <div className="action-button-container">
        <div className="action-button">
          <Button
            variant="contained"
            color="custom"
            onClick={() => {
              setShowAnswer(false);
              setShowNext(false);
              nextQuestion();
            }}
          >
            Next Question
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="action-button-container">
        <div className="action-button">
          <Button
            variant="contained"
            color="custom"
            onClick={() => {
              setShowAnswer(true);
              setShowNext(true);
            }}
          >
            Show Answer
          </Button>
        </div>
      </div>
    );
  }
};

const Practice = ({
  seconds,
  firstRand,
  secondRand,
  operator,
  score,
  questionAnswer,
  nextQuestion
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  if (seconds > 0) {
    return (
      <div className="practice-area">
        <div className="question-container">
          <div className="question">
            <Question
              firstRand={firstRand}
              secondRand={secondRand}
              operator={operator}
            />
          </div>
        </div>

        <div className="answer-container">
          <Answer answer={questionAnswer} showAnswer={showAnswer} />
        </div>
        <Progress setShowAnswer={setShowAnswer} nextQuestion={nextQuestion} />
      </div>
    );
  } else {
    return (
      <div className="practice-area">
        <div className="game-over">Game Over</div>

        <Paper className="game-score">Score: {score}</Paper>
      </div>
    );
  }
};

Practice.propTypes = {
  firstRand: PropTypes.number.isRequired,
  secondRand: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired
};

export default Practice;
