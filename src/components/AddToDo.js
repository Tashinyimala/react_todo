import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddToDo extends Component {
  state = {
    title: ''
  }  

  onChange = event => this.setState({[event.target.name]:event.target.value});
  onSubmit = event => {
      event.preventDefault();
      this.props.addToDo(this.state.title);
      this.setState({title:""})
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: "flex"}}>
          <input 
            type="text" 
            name="title" 
            style={{flex: "10", padding: "5px"}}
            placeholder="Add ToDo..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <input 
            type="submit" 
            value="Submit"
            className="btn"
            style={{flex: "1"}}
          />
      </form>
    )
  }
}

// ProTypes
AddToDo.prototypes = {
  addToDo: PropTypes.func.isRequired
}

export default AddToDo
