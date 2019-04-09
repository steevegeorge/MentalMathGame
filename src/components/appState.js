import { useState, useEffect } from "react";
import _ from "lodash";

const GAME_TIME = 300;

const appState = () => {
  const [firstRand, setFirstRand] = useState(_.random(1, 100));
  const [secondRand, setSecondRand] = useState(_.random(1, 100));
  const [questionOperator, setQuestionOperator] = useState("+");
  const [questionAnswer, setQuestionAnswer] = useState(firstRand + secondRand);
  const [seconds, setSeconds] = useState(GAME_TIME);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

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
    setGameOver(false);
  };

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setGameOver(true);
    }
  });

  return {
    firstRand,
    secondRand,
    questionOperator,
    questionAnswer,
    seconds,
    score,
    nextQuestion,
    setQuestionType,
    gameOver
  };
};

export default appState;
