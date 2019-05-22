import React, { Component } from 'react';
import AddNewTodo from './AddNewTodo';
import ViewTodos from './ViewTodos';
let id = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoListItem: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(description, priority) {
    let newTodo = {
      description: description,
      priority: priority,
      id: id
    };
    id++;
    this.state.todoListItem.push(newTodo);
    this.setState({ todoListItem: this.state.todoListItem});
  }

  handleSave(description, priority, id) {
    let saveTodo = this.state.todoListItem;
    for (let i = 0; i < saveTodo.length; i++) {
      if (saveTodo[i].id == id) {
        saveTodo[i].description = description;
        saveTodo[i].priority = priority;
      }
    }
    this.setState({ todoListItem: saveTodo });
  }

  handleDelete(id) {
    let deleteTodo = [...this.state.todoListItem];
    for (let i = 0; i < deleteTodo.length; i++) {
      if (deleteTodo[i].id == id) {
        deleteTodo.splice(i, 1);
      }
    }
    this.setState({ todoListItem: deleteTodo });
  }

  render() {
    return (
      <div className='container'>
        <div>
          <header>
            <h1>Very Simple Todo App</h1>
          </header>
          <tagline>Tracks all the things!!!</tagline>
        </div>

        <div className='row'>
          <AddNewTodo handleAdd={ this.handleAdd } />
          <ViewTodos
            todoListItem={ this.state.todoListItem }
            handleSave={ this.handleSave }
            handleDelete={ this.handleDelete }
          />
        </div>
      </div>
    );
  }
}

export default App;
