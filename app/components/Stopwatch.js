/**
 * Created by carl.hand on 03/04/2017.
 */
import React, { Component, PropTypes } from 'react'

export default class Stopwatch extends React.Component {

    render() {
        return (
            <div className="stopwatch">
                <div className="stopwatch-time">
                    {this.props.time}
                </div>
                <button onClick={this.props.shouldStart}>Start</button>
                <button onClick={this.props.reset}>Reset</button>
            </div>
        );
    }
}

Stopwatch.PropTypes = {
    start: React.PropTypes.func.isRequired,
    reset: React.PropTypes.func.isRequired,
    time: React.PropTypes.number.isRequired
};