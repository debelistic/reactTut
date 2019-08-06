import React, {Component} from 'react';
import TodoItem from './components/TodoItem';
import mockTodo from '../mockdata/mockTodo';

const todoItems = mockTodo.map(todoItem => <TodoItem key={todoItem.id} item={todoItem}/>)

class Todo extends Component {
  constructor(){
    super();
    this.state = {
      todoItems,
    }
  }

  render() {
    return (
      <div className="todo-list">
        {this.state.todoItems}
      </div>
    )
  }
}

export default Todo;