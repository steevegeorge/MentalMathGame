import _ from "lodash";
import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Options from "./components/options";
import Practice from "./components/practice";
import Paper from "@material-ui/core/Paper";
const GAME_TIME = 300;
import styled from "styled-components";

const Header = styled.h1`
  font-family: Roboto;
  text-align: center;
  color: #fff;
  font-size: 60px;

  @media screen and (max-width: 929px) {
    font-size: 35px;
  }
`;

const timeStyle = {
  width: "350px",
  fontSize: "40px",
  fontFamily: "Roboto",
  margin: "auto",
  textAlign: "center"
};

const App = () => {
  const [firstRand, setFirstRand] = useState(_.random(1, 100));
  const [secondRand, setSecondRand] = useState(_.random(1, 100));
  const [questionOperator, setQuestionOperator] = useState("+");
  const [questionAnswer, setQuestionAnswer] = useState(firstRand + secondRand);
  const [seconds, setSeconds] = useState(GAME_TIME);
  const [score, setScore] = useState(0);

  const setValues = operator => {
    let newFirstRand = _.random(1, 100);
    let newSecondRand = _.random(1, 100);
    setFirstRand(newFirstRand);
    setSecondRand(newSecondRand);
    if (operator == "+") {
      setQuestionOperator("+");
      setQuestionAnswer(newFirstRand + newSecondRand);
    } else if (operator == "-") {
      setQuestionOperator("-");
      let subAnswer = 0;
      if (newSecondRand > newFirstRand) {
        setFirstRand(newSecondRand);
        setSecondRand(newFirstRand);
        subAnswer = newSecondRand - newFirstRand;
      } else {
        subAnswer = newFirstRand - newSecondRand;
      }
      setQuestionAnswer(subAnswer);
    } else if (operator == "÷") {
      setQuestionOperator("÷");
      setQuestionAnswer((newFirstRand / newSecondRand).toFixed(2));
    } else if (operator == "x") {
      setQuestionOperator("x");
      setQuestionAnswer(newFirstRand * newSecondRand);
    }
  };

  const nextQuestion = () => {
    setValues(questionOperator);
    setScore(score + 1);
  };

  const setQuestionType = operator => {
    setScore(0);
    setSeconds(GAME_TIME);
    setValues(operator);
  };

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  });

  const Timer = () => {
    let minutes = Math.floor(seconds / 60);
    let secondsLeft = seconds - minutes * 60;
    secondsLeft = _.padStart(secondsLeft, 2, "0");
    return (
      <Paper style={timeStyle}>
        Time left {minutes}:{secondsLeft}
      </Paper>
    );
  };

  return (
    <>
      <Header>5 Minutes Mental Math Practice</Header>
      <Timer />
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
