import _ from "lodash";
import React, { useState } from "react";
import ReactDom from "react-dom";
import Options from "./components/options";
import Practice from "./components/practice";

import "./styles/app.css";

const App = () => {
  const [firstRand, setFirstRand] = useState(_.random(1, 15));
  const [secondRand, setSecondRand] = useState(_.random(1, 15));
  const [questionOperator, setQuestionOperator] = useState("+");
  const [questionAnswer, setQuestionAnswer] = useState(firstRand + secondRand);

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
      setValues(questionOperator);
      answer.target.value = "";
    }
  };

  const setQuestionType = operator => {
    setValues(operator);
  };

  return (
    <div className="app-container">
      <Options setQuestionType={setQuestionType} />
      <Practice
        firstRand={firstRand}
        secondRand={secondRand}
        operator={questionOperator}
        onKeyUp={checkAnswer}
      />
    </div>
  );
};

ReactDom.render(
  React.createElement(App, null, null),
  document.getElementById("app")
);
