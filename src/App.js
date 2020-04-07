import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm"

//
const todos = [
  {
    task: 'clean garage',
    id: 1,
    completed: false
  },
  {
    task: 'remove weeds',
    id: 2,
    completed: false
  },
  {
    task: 'vacuum',
    id: 3,
    completed: false
  },
  {
    task: 'finish laundry',
    id: 4,
    completed: false
  }
]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = { todoList : todos };//this will be set to todo list items 
  }

  addTodo = (event, todo) => {
    event.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList:[...this.state.todoList, newTodo]
    })
  }

  //class meathods to update state 
  toggleTodo = todoId => {
    console.log(todoId)
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    })
  }

  clearCompleted = event => {
    event.preventDefault();

    this.setState({
      todoList: this.state.todoList.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList
          todos={this.state.todoList}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />

      </div>

    );
  }
}

export default App;
