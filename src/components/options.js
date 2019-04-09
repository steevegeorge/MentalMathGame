import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import styled from "styled-components";

const OptionContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 245px;
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
  text-align: center;
  float: left;
`;

const buttonStyle = {
  backgroundColor: "#fff"
};

const Options = ({ setQuestionType }) => {
  return (
    <OptionContainer>
      <OptionButtonContainer>
        <OptionsButton>
          <Button
            style={buttonStyle}
            variant="contained"
            onClick={() => {
              setQuestionType("+");
            }}
          >
            +
          </Button>
        </OptionsButton>
        <OptionsButton>
          <Button
            style={buttonStyle}
            variant="contained"
            onClick={() => {
              setQuestionType("-");
            }}
          >
            -
          </Button>
        </OptionsButton>
        <OptionsButton>
          <Button
            style={buttonStyle}
            variant="contained"
            onClick={() => {
              setQuestionType("x");
            }}
          >
            x
          </Button>
        </OptionsButton>
        <OptionsButton>
          <Button
            style={buttonStyle}
            variant="contained"
            onClick={() => {
              setQuestionType("÷");
            }}
          >
            ÷
          </Button>
        </OptionsButton>
      </OptionButtonContainer>
    </OptionContainer>
  );
};

Options.propTypes = {
  setQuestionType: PropTypes.func.isRequired
};

export default Options;
