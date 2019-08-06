import React, {Component} from 'react';

class App extends Component {
  render(){
    return (
      <div>
        <Header username="victor"/>
        <Greetings/>
      </div>
    )
  }
}

class Header extends Component {
  render(){
    return (
      <header>
        <p>Welcome {this.props.username}</p>
      </header>
    )
  }
}

class Greetings extends Component {
  render(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    switch (timeOfDay) {
      case hours <= 12:
        timeOfDay = "morning";
      case hours >= 12 && hours < 17:
        timeOfDay = "afternoon";
      default:
        timeOfDay = "night";
    }

    return (
      <h1>Good {timeOfDay} to you, sir or ma</h1>
    )
  }
}

export default App;