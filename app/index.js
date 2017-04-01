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
import update from 'immutability-helper';

var Application = React.createClass({
    getInitialState: function () {
      return ({
          nextId: 2,
          Players: [
              {
                  name: "Carl",
                  score: 23,
                  id: 0
              },
              {
                  name: "Lee",
                  score: 20,
                  id: 1
              }
          ],
          title: 'Scoreboard'
      });
    },

    handleIncrement: function(index, delta) {
        const Players = this.state.Players;
        Players[index].score += delta;
    },

    handleDecrement: function () {
      var newScore = this.state.Players.score - 1;
        this.setState({
            score: newScore
        });
    },

    onAdd: function (newName) {
        const Players = this.state.Players;
        Players.push({
            name: newName,
            score: 0,
            id: this.state.nextId
        });
        this.state.nextId++;
        this.setState({
            Players: Players
        });
    },
    
    onRemove: function () {
      const Players = this.state.Players;
        Players.splice(0, 1);
        this.setState({
            Players: Players
        });
    },

    render: function() {
        return (
            <div>
                <div className="header">
                    <h1>{this.state.title}</h1>
                </div>

                <div className="players">
                    {this.state.Players.map((player, index) => {
                        return <Player name={player.name} key={index} score={player.score} />
                    })}
                    <AddButton addPlayer={this.onAdd} removePlayer={this.onRemove} />

                </div>
            </div>
        );
    }
});

ReactDOM.render(<Application />, 
document.getElementById("app"));