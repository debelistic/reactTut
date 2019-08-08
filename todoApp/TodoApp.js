import React, {Component} from 'react';
import TodoItem from './components/TodoItem';
import mockTodo from '../mockdata/mockTodo';


class Todo extends Component {
  constructor(){
    super();
    this.state = {
      mockTodo,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(id){
    this.setState(prevState => {
      const updatedTodo = prevState.mockTodo.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
      return {
        mockTodo: updatedTodo,
      }
    })
  }

  render() {
    const todoItems = this.state.mockTodo.map(todoItem => <TodoItem key={todoItem.id} item={todoItem} onChange={this.handleOnChange}/>)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default Todo;