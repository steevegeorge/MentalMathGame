import React from "react";
import ReactDom from "react-dom";
import Options from "./components/options";
import Practice from "./components/practice";
import Timer from "./components/timer";
import styled from "styled-components";
import appState from "./components/appState";

const Header = styled.h1`
  font-family: Roboto;
  text-align: center;
  color: #fff;
  font-size: 60px;
  margin-top: 10px;

  @media screen and (max-width: 929px) {
    font-size: 35px;
  }
`;

const App = () => {
  const {
    firstRand,
    secondRand,
    questionOperator,
    questionAnswer,
    seconds,
    score,
    nextQuestion,
    setQuestionType,
    gameOver,
    gameStarted,
    startStopGame,
    gameOptions
  } = appState();

  return (
    <>
      <Header>2 Minutes Mental Math Practice</Header>
      <Timer seconds={seconds} />
      <Practice
        firstNumber={firstRand}
        secondNumber={secondRand}
        operator={questionOperator}
        gameOver={gameOver}
        questionAnswer={questionAnswer}
        nextQuestion={nextQuestion}
        score={score}
        gameStarted={gameStarted}
        startStopGame={startStopGame}
      />
      <Options
        setQuestionType={setQuestionType}
        startStopGame={startStopGame}
        gameOptions={gameOptions}
      />
    </>
  );
};

ReactDom.render(
  React.createElement(App, null, null),
  document.getElementById("app")
);
