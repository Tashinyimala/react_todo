import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ToDoItem extends Component {

  getStyle = () => {
    return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
            {title}
            <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }
}

// ProTypes
ToDoItem.prototypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    padding: '5px 10px',
    cursor: 'pointer',
    float: 'right'
}

export default ToDoItem
