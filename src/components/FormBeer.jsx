import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class FormBeer extends Component {
  state = {
    name: "",
    occupation: "",
    image: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // console.log(this.state);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers", {
        name: this.state.name,
        occupation: this.state.occupation,
        image: this.state.image,
      })
      .then((apiResponse) => {
        this.props.history.push("/beers");
        console.log("Created !");
        console.log(apiResponse);
      });
  };

  render() {
    // console.log(this.props, "in form hero");

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={this.handleChange}
          value={this.state.name}
          id="name"
          name="name"
          type="text"
        />
        <label htmlFor="occupation">Occupation</label>
        <input
          onChange={this.handleChange}
          value={this.state.occupation}
          id="occupation"
          name="occupation"
          type="text"
        />
        <label htmlFor="image">image</label>
        <input
          onChange={this.handleChange}
          value={this.state.image}
          id="image"
          name="image"
          type="text"
        />
        <button>Submit !</button>
      </form>
    );
  }
}

export default withRouter(FormHero);
