import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      location: "",
      dietRestrictions: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const {name, value} = event.target;
      this.setState({
        [name]: value,
      })
  }

  handleSubmit(){    
    alert(
      `
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Age: ${this.state.age}
      Location: ${this.state.location}
      Dietary Restrictions: ${this.state.dietRestrictions}`
    )
    
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleChange}
        /><br/>

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleChange}
        /><br/>

        <input
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
        /><br/>
        
        <label>
          <input
            type="radio"
            name="gender"
            value={this.state.gender = "male"}
            onChange={this.handleChange}
          /> Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          />Female
        </label><br/>

        <select
          name="location"
          value={this.state.location}
          onChange={this.handleChange}>
          <option value="london">London</option>
          <option value="italy">Italy</option>
          <option value="cambodia">Cambodia</option>
        </select><br/>

        <select
          name="dietRestrictions"
          value={this.state.dietRestrictions}
          onChange={this.handleChange}>
          <option value="vegetarian">Vegetarian</option>
          <option value="kosher">Kosher</option>
          <option value="lactose free">Lactose free</option>
        </select><br/>

        {/* <label>
          <input
            type="checkbox"
            name="dietRestrictions"
            value={this.state.dietRestrictions = ""}
            onChange={this.handleChange}
          />Female
        </label><br/> */}

        <input type="submit"/>

        <div>
          <p>First Name: {this.state.firstName}</p>
          <p>Last Name: {this.state.lastName}</p>
          <p>Age: {this.state.age}</p>
          <p>Location: {this.state.location}</p>
          <p>Dietary restrictions: {this.state.dietRestrictions}</p>
        </div>

      </form>
    )
  }
}

export default App;