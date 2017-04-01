/**
 * Created by carl.hand on 31/03/2017.
 */
import React from 'react';

export default class AddButton extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            addButtonName: "Add Player",
            removeButtonName: "Remove Player"
        };
    }

    handleChange(e) {
        this.setState({name: e.target.value});
    }

    handleAdd() {
        this.props.addPlayer(this.state.name);
    }
    
    handleRemove() {
        this.props.removePlayer(this.state.name);
        this.setState({name: ""});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)}/>
                <input type="submit" value={this.state.addButtonName} onClick={this.handleAdd.bind(this)}/>
                <input type="submit" value={this.state.removeButtonName} onClick={this.handleRemove.bind(this)}/>
            </div>
        );
    }
}

AddButton.PropTypes = {
    addPlayer: React.PropTypes.func.isRequired,
    removePlayer: React.PropTypes.func.isRequired
}