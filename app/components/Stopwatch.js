/**
 * Created by carl.hand on 03/04/2017.
 */
import React, { Component, PropTypes } from 'react'

// anonymous function. same as writing function(props). Lazy way. Props references this.props
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

export default Stopwatch;