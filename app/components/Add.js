/**
 * Created by carl.hand on 31/03/2017.
 */
import React from 'react';

var AddButton = React.createClass({

    
    render: function() {
        return (
            <div>
                <input type="submit" value="Submit" onClick={this.props.addPlayer} />
            </div>
        );
    }
});

export default AddButton;