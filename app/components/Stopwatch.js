/**
 * Created by carl.hand on 03/04/2017.
 */
import React from 'react'

var Stopwatch = React.createClass({

    render: function() {
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
    }
});

export default Stopwatch;
