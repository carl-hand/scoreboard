/**
 * Created by carl.hand on 18/04/2017.
 */
import React from "react";
import { connect } from "react-redux";
import Player from "./Player";
import AddRemoveButton from "./AddRemoveButton";
import Stopwatch from "./Stopwatch";
import * as PlayerActionCreators from "../actions/player";
import bindActionCreators from "../../node_modules/redux/es/bindActionCreators";
require('../app.css');

var Scoreboard = React.createClass({
  getInitialState: function () {
    return ({
      Players: [
        {
          name: "Carl",
          score: 0,
        },
        {
          name: "Lee",
          score: 0,
        }
      ],
      title: "Scoreboard",
      time: 20,
      startInterval: ""
    });
  },

  handleIncrement: function (index, delta) {
    var Players = [...this.state.Players];
    var newScore = Players[index].score += delta;

    this.setState({
      score: newScore
    });

    console.log("INCREMENT:");
    console.log("Player " + Players[index].name + " score is: " + Players[index].score);

    this.state.Players.map((player) => {
      console.log(player.name + " " + player.score);
    });

    if (newScore >= 5) {
      alert(Players[index].name + " is the winner");

      Players.map((player) => {
        player.score = 0;
      });
      this.resetGame();
    }
  },

  handleDecrement: function (index, delta) {
    var Players = [...this.state.Players];
    var newScore = Players[index].score;

    if (newScore > 0) {
      newScore = Players[index].score -= delta;
      this.setState({
        score: newScore
      });

      console.log("Decrement:");
      console.log("Player score is: " + Players[index].score);
    }
  },

  handleAdd: function (newName) {
    // copying the contents of our state but this.state.Players will remain the same
    var Players = [...this.state.Players];

    if (newName === "") {
      console.log("Please enter a name");
    }
    else {
      Players.push({
        name: newName,
        score: 0
      });
    }

    this.setState({
      Players: Players
    });
  },

  handleRemove: function (name) {
    var Players = [...this.state.Players];
    Players.map(function (player, index) {

      if (player.name === name) {
        Players.splice(index, 1);
      }
      else if (name === "") {
        console.log("Please enter a name");
      }
      else {
        console.log(name + " does not exist");
      }
    });

    this.setState({
      Players: Players
    });
  },

  startGame() {
    var intervalID = setInterval(function () {
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
  },

  shouldStartGame() {
    if (this.state.time >= 20) {
      this.startGame();
    }
  },

  resetGame() {
    console.log(this.state.startInterval);
    clearInterval(this.state.startInterval);

    console.log(this.state.startInterval);
    this.setState({
      time: 20
    });
  },

  componentDidMount() {
    this.startGame();
  },

  componentWillUnmount() {
    clearInterval(this.state.startInterval);
  },

  render: function () {
    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.add, dispatch);
    // const removePlayer = bindActionCreators(PlayerActionCreators.remove, dispatch);
    // const incrementScore = bindActionCreators(PlayerActionCreators.increment, dispatch);


    return (
      <div>
        <Stopwatch time={this.state.time} shouldStart={this.shouldStartGame} reset={this.resetGame}/>

        <div className="header">
          <h1>{this.state.title}</h1>
        </div>

        <div className="players">
          {this.state.Players.map((player, index) => {
            return <Player id={index} name={player.name} key={index} score={player.score}
                           onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
          })}

          <AddRemoveButton onAdd={addPlayer} onRemove={this.handleRemove}/>
        </div>
      </div>
    );
  }
});

const mapStateToProps = state => (
  {
    players: state
  }
);

export default connect(mapStateToProps)(Scoreboard);
