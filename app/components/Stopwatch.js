/**
 * Created by carl.hand on 03/04/2017.
 */
import React from 'react'

var Stopwatch = React.createClass({
    getInitialState: function() {
      return ({
          time: 20
      });
    },

    startGame: function() {
        var intervalID = setInterval(function() {
            if (this.state.time > 0) {
                this.setState({
                    time: this.state.time - 1
                });
            }
            else {
                alert("GAME OVER");
                clearInterval(intervalID);
                this.setState({
                    time: 0
                });
            }
        }.bind(this), 1000);
    },

    render: function() {
        return (
            <div>
                <div className="stopwatch">
                    <div className="stopwatch-time">
                        {this.state.time}
                    </div>
                    <button onClick={this.startGame}>Start</button>
                    <button>Reset</button>
                </div>
            </div>
        );
    }
});

export default Stopwatch;