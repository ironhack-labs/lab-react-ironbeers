import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class CreateBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    // this.state.attenuation_level = Number(this.state.attenuation_level);
    axios
      .post("https://ironbeer-api.herokuapp.com/beers/new", this.state)
      .then(response => {
        alert("Beer has been added.");
        this.props.history.push("/beers");
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label className="label">Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label className="label">Tagline:</label>
        <input
          type="text"
          name="tagline"
          value={this.state.tagline}
          onChange={this.handleChange}
        />

        <label className="label">Description:</label>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />

        <label className="label">First brewed:</label>
        <input
          type="date"
          name="first_brewed"
          value={this.state.first_brewed}
          onChange={this.handleChange}
        />

        <label className="label">Brewers tips:</label>
        <input
          type="text"
          name="brewers_tips"
          value={this.state.brewers_tips}
          onChange={this.handleChange}
        />

        <label className="label">Attenuation level:</label>
        <input
          type="number"
          name="attenuation_level"
          value={this.state.attenuation_level}
          onChange={this.handleChange}
        />

        <label className="label">Contributed by:</label>
        <input
          type="text"
          name="contributed_by"
          value={this.state.contributed_by}
          onChange={this.handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateBeer;
