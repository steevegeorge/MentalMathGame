import _ from "lodash";
import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Options from "./components/options";
import Practice from "./components/practice";
import Paper from "@material-ui/core/Paper";
const GAME_TIME = 10;
import "./styles/app.css";

const App = () => {
  const [firstRand, setFirstRand] = useState(_.random(1, 15));
  const [secondRand, setSecondRand] = useState(_.random(1, 15));
  const [questionOperator, setQuestionOperator] = useState("+");
  const [questionAnswer, setQuestionAnswer] = useState(firstRand + secondRand);
  const [seconds, setSeconds] = useState(GAME_TIME);
  const [score, setScore] = useState(0);

  const setValues = operator => {
    let newFirstRand = _.random(1, 15);
    let newSecondRand = _.random(1, 15);
    setFirstRand(newFirstRand);
    setSecondRand(newSecondRand);
    if (operator == "+") {
      setQuestionOperator("+");
      setQuestionAnswer(newFirstRand + newSecondRand);
    } else if (operator == "-") {
      setQuestionOperator("-");
      setQuestionAnswer(newFirstRand - newSecondRand);
    } else if (operator == "÷") {
      setQuestionOperator("÷");
      setQuestionAnswer(newFirstRand / newSecondRand);
    } else if (operator == "x") {
      setQuestionOperator("x");
      setQuestionAnswer(newFirstRand * newSecondRand);
    }
  };

  const checkAnswer = answer => {
    if (answer.target.value == questionAnswer) {
      setScore(score + 1);
      setValues(questionOperator);
      answer.target.value = "";
    }
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
    return <Paper className="timer">{seconds} seconds left</Paper>;
  };

  return (
    <div className="app-container">
      <Timer />
      <Options setQuestionType={setQuestionType} />
      <Practice
        firstRand={firstRand}
        secondRand={secondRand}
        operator={questionOperator}
        onKeyUp={checkAnswer}
        seconds={seconds}
        score={score}
      />
    </div>
  );
};

ReactDom.render(
  React.createElement(App, null, null),
  document.getElementById("app")
);
