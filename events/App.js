import React, {Component} from 'react';

const clickEvent = (event) => {
  console.log('Fired')
}
const hoverEvent = (event) => {
  console.log('You hover over the image')
}

class Events extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState =>{
      return ({
        count: prevState.count + 1,
      })
    }) ;
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}
        >Change</button>
      </div>
    )
  }
}

export default Events;