/**
 * Created by carl.hand on 03/04/2017.
 */
import React, { Component, PropTypes } from 'react'

export default class Stopwatch extends React.Component {

    constructor() {
        super();
        this.state = {
            time: 20,
            startInterval: 0
        };
    }
    componentDidMount() {
        this.startGame();
    }

    startGame() {
        var intervalID = setInterval(function() {
            var newTime = this.state.time;
            if (newTime > 0) {
                this.setState({
                    time: newTime - 1
                });
            }
            else {
                alert("GAME OVER");
                clearInterval(intervalID);
            }
            console.log("INTERVAL ID: " + this.state.startInterval);
        }.bind(this), 1000);

        this.setState({
            startInterval: intervalID
        });
    }

    shouldStartGame() {
        if (this.state.time >= 20) {
            this.startGame();
        }
    }

    resetGame() {
        console.log(this.state.startInterval);
        clearInterval(this.state.startInterval);

        console.log(this.state.startInterval);
        this.setState({
            time: 20
        });
    }

    render() {
        return (
            <div>
                <div className="stopwatch">
                    <div className="stopwatch-time">
                        {this.state.time}
                    </div>
                    <button onClick={this.shouldStartGame}>Start</button>
                    <button onClick={this.resetGame}>Reset</button>
                </div>
            </div>
        );
    }
}

Stopwatch.PropTypes = {
    start: React.PropTypes.func.isRequired,
    reset: React.PropTypes.func.isRequired,
    time: React.PropTypes.number.isRequired
};