import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoading: true,
      character: {}
    }
  }

  componentDidMount(){
    fetch('https://swapi.co/api/people/1')
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          character: data,
        })
      })
  }

  render() {
    let text = this.state.isLoading ? "We're fetching your data" : this.state.character.name;
    return (
      <div>
        <p>{text}</p>
      </div>
    );
  }
}

export default App;