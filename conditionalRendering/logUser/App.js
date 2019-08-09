import React, { Component } from 'react';
import LogUser from './LogUser';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: true,
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(){
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }
  render() {
    return (
      <div>
        {this.state.isLoggedIn ? <h3>You are loggedin</h3> :
        <h3>You are loggedout</h3>}
        <LogUser onClick={this.handleOnClick}/>
      </div>
    )
  }
}