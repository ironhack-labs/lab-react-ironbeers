import React, { Component } from "react";
import Axios from "axios";

class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tip: "",
    attenuation_level: 0,
    contributed_by: ""
  };
  handleInputChange = (field, isNumber) => e => {
    const value = e.target.value;
    const parsedValue = isNumber && value ? Number(value) : value;
    this.setState({ [field]: parsedValue });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.createBeer();
  };
  createBeer = () => {
    Axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state);
  };
  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tip,
      attenuation_level,
      contributed_by
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            onChange={this.handleInputChange("name")}
            placeholder="name"
            value={name}
            required
          />
        </div>
        <div className="form-group">
          <label>tagline </label>
          <input
            type="text"
            onChange={this.handleInputChange("tagline")}
            placeholder="tagline"
            value={tagline}
            required
          />
        </div>
        <div className="form-group">
          <label>description </label>
          <input
            type="text"
            onChange={this.handleInputChange("description")}
            placeholder="description"
            value={description}
            required
          />
        </div>
        <div className="form-group">
          <label>first_brewed </label>
          <input
            type="text"
            onChange={this.handleInputChange("first_brewed")}
            placeholder="first_brewed"
            value={first_brewed}
            required
          />
        </div>
        <div className="form-group">
          <label>contributed_by</label>
          <input
            type="text"
            onChange={this.handleInputChange("brewers_tip")}
            placeholder="brewers_tip"
            value={brewers_tip}
            required
          />
        </div>
        <div className="form-group">
          <label>attenuation_level </label>
          <input
            type="number"
            onChange={this.handleInputChange("attenuation_level", true)}
            placeholder="attenuation_level "
            value={attenuation_level}
            required
          />
        </div>
        <div className="form-group">
          <label>contributed_by</label>
          <input
            type="text"
            onChange={this.handleInputChange("contributed_by")}
            placeholder="contributed_by"
            value={contributed_by}
            required
          />
        </div>
        <input type="submit" value="Add your own beer" />
      </form>
    );
  }
}

export default NewBeer;
