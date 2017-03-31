/**
 * Created by carl.hand on 31/03/2017.
 */
import React from 'react';

var AddButton = React.createClass({
   
    render: function() {
        return (
            <div>
                <form className="add-player-form">
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
});

export default AddButton;