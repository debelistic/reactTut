import React from 'react';
import TodoItem from './components/TodoItem';


const Todo = () => {
  return(
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default Todo;