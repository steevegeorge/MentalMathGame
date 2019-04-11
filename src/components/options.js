import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import styled from "styled-components";
import _ from "lodash";

const OptionContainer = styled.div`
  text-align: center;
  width: 100%;
  height: auto;
  margin-bottom: 50px;
`;

const OptionButtonContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 320px;
`;

const OptionsButton = styled.div`
  width: 80px;
  font-size: 40px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
  text-align: center;
  float: left;
`;

const buttonStyle = {
  backgroundColor: "#fff"
};

const Options = ({ setQuestionType, startStopGame, gameOptions }) => {
  let allOptions = [];
  _.forEach(gameOptions, option => {
    allOptions.push(
      <OptionsButton key={option}>
        <Button
          style={buttonStyle}
          variant="contained"
          onClick={() => {
            setQuestionType(option);
            startStopGame("stop");
          }}
        >
          {option}
        </Button>
      </OptionsButton>
    );
  });

  return (
    <OptionContainer>
      <OptionButtonContainer>{allOptions}</OptionButtonContainer>
    </OptionContainer>
  );
};

Options.propTypes = {
  setQuestionType: PropTypes.func.isRequired,
  startStopGame: PropTypes.func.isRequired,
  gameOptions: PropTypes.array.isRequired
};

export default Options;
