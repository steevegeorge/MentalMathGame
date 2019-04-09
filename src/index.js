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
    setQuestionType
  } = appState();

  return (
    <>
      <Header>5 Minutes Mental Math Practice</Header>
      <Timer seconds={seconds} />
      <Practice
        firstRand={firstRand}
        secondRand={secondRand}
        operator={questionOperator}
        seconds={seconds}
        questionAnswer={questionAnswer}
        nextQuestion={nextQuestion}
        score={score}
      />
      <Options setQuestionType={setQuestionType} />
    </>
  );
};

ReactDom.render(
  React.createElement(App, null, null),
  document.getElementById("app")
);
