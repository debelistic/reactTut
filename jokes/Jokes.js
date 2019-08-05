import React from 'react';
import Joke from './components/Joke';
import JokeData from '../mockdata/jokeData'

const jokes = JokeData.map((joke) =>
    <Joke
    key={joke.id}
    joke={joke}/>
);


const Jokes = () => {
  return (
    <div>
      {jokes}
    </div>
  )
}

export default Jokes;