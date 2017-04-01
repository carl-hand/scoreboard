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
          title: 'Scoreboard'
      });
    },

    handleIncrement: function(index, delta) {
        // this.setState({
        //     Players: update(this.state.Players, {0: {score: {$set: this.state.Players[0].score + 1}}})
        // });
        const Players = this.state.Players;
        {Players[index].score += delta};
        // this.setState({Players: Players});
    },

    handleDecrement: function () {
      var newScore = this.state.Players.score - 1;
        this.setState({
            score: newScore
        });
    },

    onAdd: function () {
        const Players = this.state.Players;
        Players.push({
            name: "Paul",
            score: 22,
        });
        this.setState({Players: Players});
    },

    render: function() {
        return (
            <div>
                <div className="header">
                    <h1>{this.state.title}</h1>
                </div>

                <div className="players">
                    {this.state.Players.map((player, index) => {
                        return <Player name={player.name} key={index} score={player.score} onIncrement={this.handleIncrement(index, 1)} />
                    })}
                    <AddButton addPlayer={this.onAdd} />

                </div>
            </div>
        );
    }
});

ReactDOM.render(<Application />, 
document.getElementById("app"));