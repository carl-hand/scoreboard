/**
 * Created by carl.hand on 31/03/2017.
 */
import React from 'react';

var Player = React.createClass({

    render: function() {
        return (
            <div>
                <div className="player">
                    <div className="player-name">
                        {this.props.name}
                    </div>
                </div>
            </div>
        );
    }
});

Player.PropTypes = {
    name: React.PropTypes.string.isRequired
};

export default Player;