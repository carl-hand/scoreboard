/**
 * Created by carl.hand on 30/03/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import css from './app.css';
require('./app.css');
import Player from './components/Player'

var Application = React.createClass({
   
    render: function() {
        return (

            <div>
                <div className="header">
                    <h1>ScoreBoard</h1>
                </div>

                <div className="players">
                    <div className="player">
                        <div className="player-name">
                            Carl Hand
                        </div>
                        <div className="player-score">
                            <div className="counter">
                                <button className="counter-action decrement"> - </button>
                                <div className="counter-score"> 31 </div>
                                <button className="counter-action increment"> + </button>
                            </div>
                        </div>
                    </div>

                    <div className="player">
                        <div className="player-name">
                            Lee Hand
                        </div>
                        <div className="player-score">
                            <div className="counter">
                                <button className="counter-action decrement"> - </button>
                                <div className="counter-score"> 27 </div>
                                <button className="counter-action increment"> + </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

ReactDOM.render(<Application />, 
document.getElementById("app"));