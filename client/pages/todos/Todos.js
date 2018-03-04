import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoStore from '../../stores/TodoStore';
import { createTodo, deleteTodo } from '../../actions/TodoActions';
import Todo from './todo/Todo';

class Todos extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);
    this.state = {
      todos: TodoStore.all(),
    };
  }

  componentWillMount() {
    TodoStore.on('change', this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener('change', this.getTodos);
  }

  getTodos = () => {
    this.setState({todos: TodoStore.all()});
  }

  createTodo = () => {
    const value = document.getElementById('create-todo').value;
    if (value)
      createTodo(value);
  }

  onDelete = (id) => (e) => {
    deleteTodo(id);
  }

  render() {
    const todoList = this.state.todos.map(todo => (
      <Todo key={todo.id} {...todo} onDelete={this.onDelete} />
    ));
    return (
      <div>
        <h1>Todos</h1>
        <input id="create-todo" />
        <button onClick={this.createTodo}>Create</button>
        <ul>{todoList}</ul>
      </div>
    );
  }
}

export default Todos;