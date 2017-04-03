/**
 * Created by carl.hand on 03/04/2017.
 */
import React from 'react'

var Stopwatch = React.createClass({
    getInitalState: function() {
      return ({
          time: 0
      });
    },
    
    render: function() {
        return (
            <div>
                <div className="stopwatch">
                    <div className="stopwatch-time">
                       20:00
                    </div>
                    <button>Start</button>
                    <button>Reset</button>
                </div>
            </div>
        );
    }
});

export default Stopwatch;