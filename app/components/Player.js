/**
 * Created by carl.hand on 31/03/2017.
 */
import React from 'react';

var Player = React.createClass({

    render: function() {
        return (
            <div className="players">
                <div className="player">
                    <div className="player-name">
                        Carl Hand
                    </div>
                </div>

                <div className="player">
                    <div className="player-name">
                        Lee Hand
                    </div>
                </div>
            </div>
        );
    }
});

export default Player;