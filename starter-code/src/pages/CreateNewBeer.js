import React, { Component } from "react";
import axios from "axios";

export default class beerForm extends Component {
  state = {
    newBeer: {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewer_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    }
  };

  submit = e => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", this.state.newBeer)
      .then(response => {
        console.log(response);
      });
  };

  inputChange = e => {
    let { name, value } = e.target;
    let newnewBeer = this.state.newBeer;
    newnewBeer[name] = value;
    this.setState({ newBeer: newnewBeer });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            name="name"
            id="1"
            type="text"
            value={this.state.name}
            placeholder="name"
            onChange={this.inputChange}
          />
          <br />

          <input
            name="tagline"
            id="2"
            type="text"
            value={this.state.name}
            placeholder="tagline"
            onChange={this.inputChange}
          />
          <br />

          <input
            name="description"
            id="3"
            type="text"
            value={this.state.name}
            placeholder="description"
            onChange={this.inputChange}
          />
          <br />

          <input
            name="first_brewed"
            id="4"
            type="text"
            value={this.state.name}
            placeholder="first brewed by"
            onChange={this.inputChange}
          />
          <br />

          <input
            name="brewer_type"
            id="5"
            type="text"
            value={this.state.name}
            placeholder="brewer type"
            onChange={this.inputChange}
          />
          <br />

          <input
            name="attenuation_level"
            id="6"
            type="number"
            value={this.state.name}
            placeholder=" attenuation level"
            onChange={this.inputChange}
          />
          <br />

          <input
            name="contributed_by"
            id="7"
            type="text"
            value={this.state.name}
            placeholder="contributed by"
            onChange={this.inputChange}
          />
          <br />
          <input type="submit" value="Add beer" />
        </form>
      </div>
    );
  }
}
