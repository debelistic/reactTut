import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state ={
      isLoggedIn: true,
    }
  }
  render() {
    let wordDisplay;
    if(this.state.isLoggedIn === true) {
      wordDisplay = "in"
    } else{
      wordDisplay = "out"
    }
    return (
      <div>
        <p>You are currently logged {wordDisplay}</p>
      </div>
    )
  }
}

export default App;