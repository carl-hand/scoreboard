/**
 * Created by carl.hand on 03/04/2017.
 */
import React, { Component, PropTypes } from 'react'

var Stopwatch =  () => {

    return (
        <div>
            <div className="stopwatch">
                <div className="stopwatch-time">
                    {this.props.time}
                </div>
                <button onClick={this.props.start}>Start</button>
                <button onClick={this.props.reset}>Reset</button>
            </div>
        </div>
    );
};

export default Stopwatch;