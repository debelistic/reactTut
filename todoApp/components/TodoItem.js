import React from 'react';

const completedStyle = {
  color: "green",
  textDecorationLine: "line-through",
  fontFamily: "Roboto"
}

const incompletedStyle = {
  color: "red",
  textDecorationLine: "none",
  fontFamily: "Roboto"
}

const TodoItem = (props) => {
  return(
    <div className="todo-item">
      <input type="checkbox"
        checked={props.item.completed}
        onChange={() => props.onChange(props.item.id)}/>
      <p style={
        props.item.completed ? completedStyle : incompletedStyle
      }>{props.item.text}</p>
    </div>
  )
}

export default TodoItem;