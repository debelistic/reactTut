import React from 'react';
import Joke from './components/Joke';
import JokeData from '../mockdata/jokeData'

const Jokes = () => {
  return (
    <div>
       <Joke
        joke={{
          punchLine: "I don't know, but the flag is a big plus!"
        }}
      />
      <Joke
        joke={{
          question: "What's the best thing about Switzerland?",
          punchLine: "I don't know, but the flag is a big plus!"
      }}/>
      <Joke
        joke={{
          question: "Did you hear about the mathematician who's afraid of negative numbers?",
          punchLine: "He'll stop at nothing to avoid them"
      }}/>
      <Joke
        joke={{
          question: "Hear about the new restaurant called Karma?",
          punchLine: "There’s no menu: You get what you deserve."
      }}/>
      <Joke
        joke={{
          question: "Did you hear about the actor who fell through the floorboards?",
          punchLine: "He was just going through a stage."
      }}
      />
    </div>
  )
}

export default Jokes;