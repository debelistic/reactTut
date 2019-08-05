import React from 'react';

const Joke = (props) => {
  return (
    <div>
      <h3
        style={{display: !props.joke.question && "none"}}>
          Question: {props.joke.question}
      </h3>
      <h3
        style={{color: !props.joke.question && "#666"}}>
          Punchline: {props.joke.punchLine}
      </h3>
      <hr/>
    </div>
  )
}

export default Joke;