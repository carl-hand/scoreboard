/**
 * Created by carl.hand on 31/03/2017.
 */
import React, { Component, PropTypes } from "react";
import Counter from "./Counter";

export default class Player extends Component {

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
    var score = this.props.score;
    return (
      <div className="player">
        <div className="player-name">
          {this.props.name}
        </div>
        <Counter score={score} onIncrementScore={this.incrementScore.bind(this)}
                 onDecrementScore={this.decrementScore.bind(this)}/>
      </div>
    );
  }
}

Player.PropTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onIncrement: React.PropTypes.func.isRequired,
  onDecrement: React.PropTypes.func.isRequired
};
