/**
 * Created by carl.hand on 30/03/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import css from './app.css';
require('./app.css');
import Player from './components/Player'
import Counter from './components/Counter'
import AddButton from './components/Add'
import Stopwatch from './components/Stopwatch'
import update from 'immutability-helper';


var Application = React.createClass({
    getInitialState: function () {
      return ({
          nextId: 2,
          Players: [
              {
                  name: "Carl",
                  score: 23,
              },
              {
                  name: "Lee",
                  score: 20,
              }
          ],
          title: "Scoreboard",
          time: 5,
          startInterval: ""
      });
    },

    handleIncrement: function(index, delta) {
        var Players = this.state.Players;
        var newScore = Players[index].score += delta;
        this.setState({
            score: newScore
        });

        if (newScore >= 30) {
            alert(Players[index].name + " is the winner");
            this.replaceState(this.getInitialState());
        }
    },

    handleDecrement: function (index, delta) {
        var Players = this.state.Players;
        var newScore = Players[index].score -= delta;
        this.setState({
            score: newScore
        });
    },

    onAdd: function (newName) {
        var Players = this.state.Players;
        if (newName === "") {
            console.log("Please enter a name");
        }
        else {
            Players.push({
                name: newName,
                score: 0,
                id: this.state.nextId
            });
            this.state.nextId++;
        }

        this.setState({
            Players: Players
        });
    },
    
    onRemove: function (name) {
      var Players = this.state.Players;
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

    startGame: function() {
        var intervalID = setInterval(function() {
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
        }.bind(this), 1000);

        this.setState({
            startInterval: intervalID
        });
    },

    resetGame: function() {
        this.setState({
            time: 5
        });
        clearInterval(this.state.startInterval);
    },

    render: function() {
        return (
            <div>
                <Stopwatch start={this.startGame} reset={this.resetGame} time={this.state.time}/>
                
                <div className="header">
                    <h1>{this.state.title}</h1>
                </div>

                <div className="players">
                    {this.state.Players.map((player, index) => {
                        return <Player id={index} name={player.name} key={index} score={player.score} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
                    })}
                    <AddButton addPlayer={this.onAdd} removePlayer={this.onRemove} />

                </div>
            </div>
        );
    }
});

ReactDOM.render(<Application />, 
document.getElementById("app"));