/**
 * Created by carl.hand on 31/03/2017.
 */
import React from 'react';

export default class AddRemoveButton extends React.Component {

  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  add() {
    this.props.onAdd(this.state.name);
    this.setState({
      name: ''
    });
  }

  remove() {
    this.props.onRemove(this.state.name);
    this.setState({
      name: ''
    });
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.name} onChange={this.handleChange.bind(this)}/>
        <input type='submit' value='Add Player' onClick={this.add.bind(this)}/>
        <input type='submit' value='Remove Player' onClick={this.remove.bind(this)}/>
      </div>
    );
  }
}

AddRemoveButton.PropTypes = {
  onAdd: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired
};
