/**
 * Created by carl.hand on 30/03/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Player from './components/Player'
import AddRemoveButton from './components/AddRemoveButton'
import Stopwatch from './components/Stopwatch'
require('./app.css');
// import update from 'immutability-helper';

var Application = React.createClass({
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

    handleIncrement: function(index, delta) {
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
            clearInterval(this.state.startInterval);
            
            this.setState({
                time: 20
            });

        }
    },

    handleDecrement: function(index, delta) {
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

    handleAdd: function(newName) {
        // var Players = Object.assign([], this.state.Players, {name: newName, score: 0});

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

    handleRemove: function(name) {
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

    checkState: function() {
        console.log("CHECKING STATE...");
        this.state.Players.map((player) => {
            console.log(player.name + " " + player.score);
        });
    },

    render: function() {
        return (
            <div>
                <Stopwatch />
                
                <div className="header">
                    <h1>{this.state.title}</h1>
                </div>

                <div className="players">
                    {this.state.Players.map((player, index) => {
                        return <Player id={index} name={player.name} key={index} score={player.score} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
                    })}

                    <AddRemoveButton onAdd={this.handleAdd} onRemove={this.handleRemove} />
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Application />, 
document.getElementById("app"));