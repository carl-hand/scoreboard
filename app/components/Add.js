/**
 * Created by carl.hand on 31/03/2017.
 */
import React from 'react';

var AddButton = React.createClass({

    getInitialState: function() {
        return (
        {name: ""}
        );
    },
    
    handleAdd: function() {
        var newName = this.state.name;
        this.props.addPlayer(newName);
    },

    handleChange: function(e) {
        var newName = e.target.value;
        this.setState({name: newName});
    },

    render: function() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                <input type="submit" value="Add Player" onClick={this.handleAdd}/>
                <input type="submit" value="Remove Player" onClick={this.props.removePlayer}/>
            </div>
        );
    }
});

export default AddButton;