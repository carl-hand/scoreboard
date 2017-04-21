/**
 * Created by carl.hand on 03/04/2017.
 */
import React, { Component, PropTypes } from "react";

const Stopwatch = (props) => {

  return (
    <div className="stopwatch">
      <div className="stopwatch-time">
        {props.time}
      </div>
      <button onClick={props.shouldStart}>Start</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
};

Stopwatch.PropTypes = {
  time: React.PropTypes.number.isRequired,
  shouldStart: React.PropTypes.func.isRequired,
  reset: React.PropTypes.func.isRequired
};

export default Stopwatch;
