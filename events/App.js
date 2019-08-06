import React, {Component} from 'react';

const clickEvent = (event) => {
  console.log('Fired')
}
const hoverEvent = (event) => {
  console.log('You hovr over the image')
}

class Events extends Component {
  render() {
    return (
      <div>
        <img src="https://www.fillmurray.com/200/100" onMouseOver={hoverEvent}/>
        <br/>
        <br/>
        <button onClick={clickEvent}>Click Me</button>
      </div>
    )
  }
}

export default Events;