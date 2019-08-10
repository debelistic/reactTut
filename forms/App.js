import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      isFriendly: true,
      message: "",
      favColor: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    const {name, value, type, checked} = event.target;
    type === "checkbox" ?
    this.setState({
      [name]: checked,
    }) : this.setState({
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
        <br/>
        <textarea
          value={this.state.message}
          name="message"
          onChange={this.handleChange}
        />
        <br/>
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />Is friendly
        </label>
        <br/>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender = "male"}
            onChange={this.handleChange}
          />Male
        </label>
        <br/>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender = "female"}
            onChange={this.handleChange}
          />Female
        </label>
        <br/>
        <select
          value={this.state.favColor}
          name="favColor"
          onChange={this.handleChange}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
        </select>
        <p>My Name is {this.state.firstName} {this.state.lastName}</p>
        <p>I'm {this.state.gender}</p>
        <p>My favorite color is {this.state.favColor}</p>
        <p>My message for you is {this.state.message}</p>
        {this.state.isFriendly ? <p>I'm friendly</p> : <p>I'm not friendly</p>}
      </form>
    );
  }
}

export default App;