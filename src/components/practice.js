import React, { useState } from "react";
import Question from "./question";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Output = styled.div`
  height: inherit;
  width: inherit;
  font-size: 60px;
  text-align: center;
  color: #fff;
  border: 4px solid #fff;
  border-radius: 10px;
  background-color: #000;
`;

const ActionButtons = styled.div`
  width: 137px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const SingleActionButton = styled.div`
  width: 138px;
`;

const PracticeArea = styled.div`
  font-size: 100px;
  font-family: Roboto;
  width: 100%;

  @media screen and (max-width: 929px) {
    font-size: 70px;
  }
`;

const QuestionContainer = styled.div`
  color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  text-align: center;
`;

const AnswerContainer = styled.div`
  clear: both;
  height: 70px;
  width: 300px;
  margin: 0 auto;
`;

const GameOver = styled.div`
  text-align: center;
`;

const Score = styled.div`
  color: yellow;
  font-size: 60px;
  text-align: center;
  margin-top: 10px;
`;

const buttonStyle = {
  backgroundColor: "#fff"
};

const Answer = ({ answer, showAnswer }) => {
  if (showAnswer) {
    return <Output>{answer}</Output>;
  } else {
    return <Output />;
  }
};

const Progress = ({
  setShowAnswer,
  nextQuestion,
  gameStarted,
  startStopGame
}) => {
  const [showNext, setShowNext] = useState(false);

  if (!gameStarted) {
    setShowAnswer(false);

    return (
      <ActionButtons>
        <SingleActionButton>
          <Button
            style={buttonStyle}
            variant="contained"
            onClick={() => {
              setShowNext(false);
              startStopGame("start");
              setShowAnswer(false);
            }}
          >
            Start
          </Button>
        </SingleActionButton>
      </ActionButtons>
    );
  } else if (showNext) {
    return (
      <ActionButtons>
        <SingleActionButton>
          <Button
            style={buttonStyle}
            variant="contained"
            onClick={() => {
              setShowAnswer(false);
              setShowNext(false);
              nextQuestion();
            }}
          >
            Next Question
          </Button>
        </SingleActionButton>
      </ActionButtons>
    );
  } else {
    return (
      <ActionButtons>
        <SingleActionButton>
          <Button
            style={buttonStyle}
            variant="contained"
            onClick={() => {
              setShowAnswer(true);
              setShowNext(true);
            }}
          >
            Show Answer
          </Button>
        </SingleActionButton>
      </ActionButtons>
    );
  }
};

const Practice = ({
  firstNumber,
  secondNumber,
  operator,
  questionAnswer,
  nextQuestion,
  score,
  gameOver,
  gameStarted,
  startStopGame
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  if (!gameOver) {
    return (
      <PracticeArea>
        <QuestionContainer>
          <Question
            firstRand={firstNumber}
            secondRand={secondNumber}
            operator={operator}
            gameStarted={gameStarted}
          />
        </QuestionContainer>

        <AnswerContainer>
          <Answer answer={questionAnswer} showAnswer={showAnswer} />
        </AnswerContainer>
        <Score>{score}</Score>

        <Progress
          setShowAnswer={setShowAnswer}
          nextQuestion={nextQuestion}
          gameStarted={gameStarted}
          startStopGame={startStopGame}
        />
      </PracticeArea>
    );
  } else {
    return (
      <PracticeArea>
        <GameOver>Game Over</GameOver>
      </PracticeArea>
    );
  }
};

Practice.propTypes = {
  firstNumber: PropTypes.number.isRequired,
  secondNumber: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired,
  gameOver: PropTypes.bool.isRequired,
  gameStarted: PropTypes.bool.isRequired,
  startStopGame: PropTypes.func.isRequired
};

export default Practice;
