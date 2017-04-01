/**
 * Created by carl.hand on 31/03/2017.
 */
import React from 'react';

export default class Player extends React.Component {

    constructor() {
        super();

    }

    incrementScore() {
        this.props.onIncrement(this.props.id, 1);
    }

    decrementScore() {
        this.props.onDecrement(this.props.id, 1);
    }
    
    render() {
        return (
            <div>
                <div className="player">
                    <div className="player-name">
                        {this.props.name}
                    </div>
                    <div className="counter">
                        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
                        <div className="counter-score"> {this.props.score} </div>
                        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
                    </div>
                </div>
            </div>
        );
    }
}

Player.PropTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    onIncrement: React.PropTypes.func.isRequired,
    // onDecrement: React.PropTypes.func.isRequired
};
