/**
 * Created by carl.hand on 31/03/2017.
 */
import React from 'react';

var AddButton = React.createClass({

    
    render: function() {
        return (
            <div>
                <input type="submit" value="Add Player" onClick={this.props.addPlayer} />
                <input type="submit" value="Remove Player" onClick={this.props.removePlayer} />
            </div>
        );
    }
});

export default AddButton;