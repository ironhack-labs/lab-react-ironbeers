// components/tasks/AddTask.js

import React, { Component } from "react";
import axios from "axios";
import Nav from "./Nav";

class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: "",
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const tagline = this.state.tagline;
    const first_brewed = this.state.first_brewed;
    const brewers_tips = this.state.brewers_tips;
    const attenuation_level = this.state.attenuation_level;
    const contributed_by = this.state.contributed_by;
    const description = this.state.description;
    const beerId = this.state._id;
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name,
        tagline,
        first_brewed,
        attenuation_level,
        brewers_tips,
        contributed_by,
        description,
        beerId,
      })
      .then(() => {
        this.setState({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: "",
        });
        this.props.history.push("/beers");
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <h3>Add Task</h3>
          <form onSubmit={this.handleFormSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Tagline:</label>
            <input
              type="text"
              name="tagline"
              value={this.state.tagline}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Description:</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={(e) => this.handleChange(e)}
            />
            <label>First Brewed:</label>
            <textarea
              name="first_brewed"
              value={this.state.first_brewed}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Brewers tips:</label>
            <textarea
              name="brewers_tips"
              value={this.state.brewers_tips}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Attenuation Level:</label>
            <textarea
              name="attenuation_level"
              value={this.state.attenuation_level}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Contributed by:</label>
            <textarea
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={(e) => this.handleChange(e)}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default NewBeer;
