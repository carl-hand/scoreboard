/**
 * Created by carl.hand on 03/04/2017.
 */
import React, { Component, PropTypes } from 'react'

const Stopwatch =  (props) => {

    return (
        <div>
            <div className="stopwatch">
                <div className="stopwatch-time">
                    {props.time}
                </div>
                <button onClick={props.start}>Start</button>
                <button onClick={props.reset}>Reset</button>
            </div>
        </div>
    );
};

Stopwatch.PropTypes = {
    start: React.PropTypes.func.isRequired,
    reset: React.PropTypes.func.isRequired,
    time: React.PropTypes.number.isRequired
};

export default Stopwatch;