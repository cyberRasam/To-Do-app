import React, { Component } from 'react';

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: '' });
  };
  handleChange = (event) => {
    this.setState({
      task: event.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="enter the task"
          value={this.state.task}
          onChange={this.handleChange}
          autoFocus
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>
    );
  }
}
