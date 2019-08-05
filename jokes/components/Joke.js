import React from 'react';


const propVariable = (variable, styles, value) => {
  return (
    <h3 style={styles}>{variable} : {value}</h3>
  )
}



const Joke = (props) => {
  return (
    <div>
      {propVariable("Question",
        {display: !props.joke.question && "none"},
        props.joke.question)}
    
      {propVariable("Answer",
        {color: !props.joke.question && "#666"},
        props.joke.punchLine)}
      <hr/>
    </div>
  )
}

export default Joke;