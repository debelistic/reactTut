import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    const {name, value} = event.target;
    console.log(name, value);
    
    this.setState({
      [name]: value,
    })
  }
  render() {
    return (
      <form>
        <input
          value={this.state.firstName}
          type="text"name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br/>
        <input
          value={this.state.lastName}
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <p>{this.state.firstName} {this.state.lastName}</p>
      </form>
    );
  }
}

export default App;