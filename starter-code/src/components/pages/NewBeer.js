import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
import axios from "axios";
import "./style.css";

export default class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state);
  };

  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = this.setState;
    return (
      <div className="add-beer-container">
        <HomeHeader />
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">tagline</label>
          <input
            type="text"
            value={tagline}
            name="tagline"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">description</label>
          <input
            type="text"
            value={description}
            name="description"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">first_brewed</label>
          <input
            type="text"
            value={first_brewed}
            name="first_brewed"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">brewers_tips</label>
          <input
            type="text"
            value={brewers_tips}
            name="brewers_tips"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">attenuation_level</label>
          <input
            type="number"
            value={attenuation_level}
            name="attenuation_level"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">contributed_by</label>
          <input
            type="text"
            value={contributed_by}
            name="contributed_by"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <input
            className="add-beer-container-submit"
            type="button"
            value="submit"
            name="submit"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
