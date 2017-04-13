/**
 * Created by carl.hand on 31/03/2017.
 */
import React from 'react';

export default class AddRemoveButton extends React.Component {

    constructor() {
        super();
        this.state = {
            name: ""
        };
    }

    // so I can enter values into the textbox
    handleChange(e) {
        this.setState({name: e.target.value});
    }

    handleAdd() {
        this.props.addPlayer(this.state.name);
        this.setState({name: ""});
    }
    
    handleRemove() {
        this.props.removePlayer(this.state.name);
        this.setState({name: ""});
    }

    render() {
        return (
            // look at notes for the following
            // uncontrolled component, e.g. input but once we assign a value prop to it, it becomes a controlled component
            <div>
                <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)}/>
                <input type="submit" value="Add Player" onClick={this.handleAdd.bind(this)}/>
                <input type="submit" value="Remove Player" onClick={this.handleRemove.bind(this)}/>
            </div>
        );
    }
}

AddRemoveButton.PropTypes = {
    addPlayer: React.PropTypes.func.isRequired,
    removePlayer: React.PropTypes.func.isRequired
}
