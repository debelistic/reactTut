import React from 'react';
import TodoItem from './components/TodoItem';
import mockTodo from '../mockdata/mockTodo';

const todoItems = mockTodo.map(todoItem => <TodoItem key={todoItem.id} item={todoItem}/>)

const Todo = () => {
  return(
    <div className="todo-list">
      {todoItems}
    </div>
  )
}

export default Todo;