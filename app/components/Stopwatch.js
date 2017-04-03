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
        // setTimeout();
        var newTime = time;
        newTime--;
        this.setState({
            time: newTime
        });
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