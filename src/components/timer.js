import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";

const timeStyle = {
  width: "350px",
  fontSize: "40px",
  fontFamily: "Roboto",
  margin: "auto",
  textAlign: "center"
};

const Timer = ({ seconds }) => {
  let minutes = Math.floor(seconds / 60);
  let secondsLeft = seconds - minutes * 60;
  secondsLeft = _.padStart(secondsLeft, 2, "0");
  return (
    <Paper style={timeStyle}>
      Time left {minutes}:{secondsLeft}
    </Paper>
  );
};

Timer.propTypes = {
  seconds: PropTypes.number.isRequired
};

export default Timer;
