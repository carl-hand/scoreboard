/**
 * Created by carl.hand on 30/03/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import css from './app.css';
require('./app.css');
import Player from './components/Player'
import Counter from './components/Counter'

var Application = React.createClass({
    getInitialState: function () {
      return ({
          name: "Carl",
          score: 23
      });
    },

    handleIncrement: function() {
        var newScore = this.state.score + 1;
        this.setState({
            score: newScore
        })
    },
    
    render: function() {
        return (
            <div>
                <div className="header">
                    <h1>ScoreBoard</h1>
                </div>

                <div className="players">
                        <Player name={this.state.name} />
                    <div className="player-score">
                        <Counter score={this.state.score} onIncrement={this.handleIncrement}/>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Application />, 
document.getElementById("app"));