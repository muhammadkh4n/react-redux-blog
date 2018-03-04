import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 12323232,
        text: 'Go somewhere',
        complete: false
      },
      {
        id: 12323233,
        text: 'walk 30 min',
        complete: false
      }
    ];
  }

  all() {
    return this.todos;
  }

  create(text) {
    this.todos.push({
      id: Date.now(),
      text,
      complete: false
    });
    this.emit('change');
  }

  delete(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.emit('change');
  }

  handleActions(action) {
    switch (action.type) {
      case 'CREATE_TODO':
        this.create(action.text);
        break;
      case 'DELETE_TODO':
        this.delete(action.id);
        break;
    }
  }
}
const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;