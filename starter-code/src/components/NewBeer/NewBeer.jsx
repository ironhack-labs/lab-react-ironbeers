import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import "./NewBeer.css";

class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    let value = event.target.value;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level:
        this.state.attenuation_level === "" ? 0 : this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    };
   
    console.log(data);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", data)
      .then((apiResponse) => {
        console.log(apiResponse);
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="new-beer-page">
          <form
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            className="new-beer-form"
          >
            <h1 className="form-title">Add a new beer</h1>
            <div className="form-unit">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-unit">
              <label htmlFor="tagline">Tagline</label>
              <input type="text" name="tagline" id="tagline" />
            </div>
            <div className="form-unit">
              <label htmlFor="description">Description</label>
              <input type="text" name="description" id="description" />
            </div>
            <div className="form-unit">
              <label htmlFor="first_brewed">First Brewed date</label>
              <input type="text" name="first_brewed" id="first_brewed" />
            </div>
            <div className="form-unit">
              <label htmlFor="brewers_tips">Brewers tips</label>
              <input type="text" name="brewers_tips" id="brewers_tips" />
            </div>
            <div className="form-unit">
              <label htmlFor="attenuation_level">Attenuation level</label>
              <input
                type="number"
                name="attenuation_level"
                id="attenuation_level"
              />
            </div>
            <div className="form-unit">
              <label htmlFor="contributed_by">Your name</label>
              <input type="text" name="contributed_by" id="contributed_by" />
            </div>
            <button className="button-form" type="submit">
              Submit
            </button>
          </form>
        </main>
      </React.Fragment>
    );
  }
}

export default NewBeer;
