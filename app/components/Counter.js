/**
 * Created by carl.hand on 31/03/2017.
 */
import React from 'react';

var Counter = React.createClass({
   
    render: function() {
        return (
            <div>
                <div className="counter">
                    <button className="counter-action decrement"> - </button>
                    <div className="counter-score"> {this.props.score} </div>
                    <button className="counter-action increment"> + </button>
                </div>
            </div>
        );
    }
});

Counter.PropTypes = {
    score: React.PropTypes.number.isRequired,
};

export default Counter;