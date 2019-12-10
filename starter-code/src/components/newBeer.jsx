import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";

///// FORM EXAMPLE

export class newBeer extends Component {
  constructor() {
    super();
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
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formHandler = event => {
    event.preventDefault();
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <img
              src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
              alt="Home icon"
            />
          </Link>
        </nav>
        <div>
          <form>
            <div>
              <label htmlFor="input-name">Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="tagline">Tagline</label>
              <input
                type="text"
                name="tagline"
                value={this.state.tagline}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="first-brewed">First brewed</label>
              <input
                type="text"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="brewers-tips">Brewers tips</label>
              <input
                type="text"
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="attenuation">Attenuation level</label>
              <input
                type="number"
                min="0"
                max="50"
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="contributed">Contributed by</label>
              <input
                type="type"
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" onClick={this.formHandler}>
              Add new
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default newBeer;
