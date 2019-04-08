import _ from "lodash";
import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Options from "./components/options";
import Practice from "./components/practice";
import Paper from "@material-ui/core/Paper";
const GAME_TIME = 300;
import "./styles/app.css";

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
    setScore(score + 1);
    setValues(questionOperator);
  };

  const setQuestionType = operator => {
    setSeconds(GAME_TIME);
    setScore(0);
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
      <Paper className="timer">
        Time left {minutes}:{secondsLeft}
      </Paper>
    );
  };

  return (
    <div className="app-container">
      <h1>5 Minutes Mental Math Practice</h1>
      <Timer />
      <Options setQuestionType={setQuestionType} />
      <Practice
        firstRand={firstRand}
        secondRand={secondRand}
        operator={questionOperator}
        seconds={seconds}
        score={score}
        questionAnswer={questionAnswer}
        nextQuestion={nextQuestion}
      />
    </div>
  );
};

ReactDom.render(
  React.createElement(App, null, null),
  document.getElementById("app")
);
