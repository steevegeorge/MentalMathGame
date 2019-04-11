import { useState, useEffect } from "react";
import _ from "lodash";

const GAME_TIME = 120;

const appState = () => {
  const [firstRand, setFirstRand] = useState(_.random(1, 100));
  const [secondRand, setSecondRand] = useState(_.random(1, 100));
  const [questionOperator, setQuestionOperator] = useState("+");
  const [questionAnswer, setQuestionAnswer] = useState(firstRand + secondRand);
  const [seconds, setSeconds] = useState(GAME_TIME);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOptions] = useState(["+", "-", "×", "÷", "×11", "x²"]);
  const [gameType, setGameType] = useState("normal");

  const setValues = (operator, passedGameType) => {
    let newFirstRand = _.random(1, 100);
    let newSecondRand = _.random(1, 100);
    if (passedGameType == "x²") {
      newSecondRand = newFirstRand;
      setGameType("x²");
    } else if (passedGameType == "×11") {
      newSecondRand = 11;
      setGameType("×11");
    } else if (passedGameType == "normal") {
      setGameType("normal");
    } else if (gameType == "x²") {
      newSecondRand = newFirstRand;
      setGameType("x²");
    } else if (gameType == "×11") {
      newSecondRand = 11;
      setGameType("×11");
    } else {
      setGameType("normal");
    }

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
    } else if (operator == "×") {
      setQuestionOperator("×");
      setQuestionAnswer(newFirstRand * newSecondRand);
    }
  };

  const nextQuestion = () => {
    setValues(questionOperator);
    setScore(score + 1);
  };

  const setQuestionType = option => {
    setSeconds(GAME_TIME);
    setGameOver(false);

    if (option == "×11") {
      setValues("×", "×11");
      setGameType("×11");
    } else if (option == "x²") {
      setValues("×", "x²");
      setGameType("x²");
    } else {
      setValues(option, "normal");
      setGameType("normal");
    }
  };

  const startStopGame = startStop => {
    if (startStop == "start") {
      setScore(0);
      setSeconds(GAME_TIME);
      setGameStarted(true);
    } else if (startStop == "stop") {
      setScore(0);
      setSeconds(GAME_TIME);
      setGameStarted(false);
    }
  };

  useEffect(() => {
    if (seconds > 0 && gameStarted) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setGameStarted(false);
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
    gameOver,
    gameStarted,
    startStopGame,
    gameOptions
  };
};

export default appState;
