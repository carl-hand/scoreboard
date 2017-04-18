/**
 * Created by carl.hand on 31/03/2017.
 */
import React from 'react';

const Counter = (props) => {

    return (
        <div>
            <div className="counter">
                <button className="counter-action decrement" onClick={props.onDecrementScore}> - </button>
                <div className="counter-score"> {props.score} </div>
                <button className="counter-action increment" onClick={props.onIncrementScore}> + </button>
            </div>
        </div>
    );
};

Counter.PropTypes = {
    score: React.PropTypes.number.isRequired,
    onIncrementScore: React.PropTypes.func.isRequired,
    onDecrementScore: React.PropTypes.func.isRequired
};

export default Counter;
