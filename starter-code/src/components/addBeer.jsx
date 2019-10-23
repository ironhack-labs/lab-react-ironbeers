import React, { Component } from "react";
import axios from "axios";

class AddBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by:""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    } = this.status;
    axios
      .post("https://ih-beers-api.herokuapp.com/beers/new", {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by
      })
      .then(() => {
        // this.props.getData();
        this.setState({ name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by:"" });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={e => this.handleChange(e)}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
          <label>First brewed:</label>
          <input
            type="text"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={e => this.handleChange(e)}
          />
          <label>Brewers tips:</label>
          <input
            type="text"
            name="brewers_tips"
            value={this.state.brewers_tips}
            onChange={e => this.handleChange(e)}
          />
          <label>Attenuation level:</label>
          <input
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={e => this.handleChange(e)}
          />
          <label>Contributed by:</label>
          <input
            type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddBeers;
