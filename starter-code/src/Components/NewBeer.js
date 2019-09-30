import React, { Component } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");

export class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://ih-beer-api.herokuapp.com/beers/new", this.state)
      .then(res => {
        console.log(res);
        this.setState({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: "",
          contributed_by: ""
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div>
        <Link to="/">
          <img
            src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
            alt="Homelink"
          />
        </Link>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">name</label> <br />
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="">tagline</label> <br />
          <input
            type="text"
            id="tagline"
            name="tagline"
            value={this.state.tagline}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="">description</label> <br />
          <textarea
            type="text"
            id="description"
            name="description"
            value={this.state.description}
            cols="30"
            rows="10"
            onChange={this.handleChange}
          ></textarea>{" "}
          <br />
          <label htmlFor="">first_brewed</label> <br />
          <input
            type="text"
            id="first_brewed"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="">brewers_tips</label> <br />
          <input
            type="text"
            id="brewers_tips"
            name="brewers_tips"
            value={this.state.brewers_tips}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="">attenuation_level</label> <br />
          <input
            type="number"
            id="attenuation_level"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="">contributed_by</label> <br />
          <input
            type="text"
            id="contributed_by"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={this.handleChange}
          />{" "}
          <br />
          <button
            style={{
              backgroundColor: "skyblue",
              width: "10vw",
              height: "4vh",
              marginTop: 20,
              borderRadius: 10
            }}
            type="submit"
          >
            Add New
          </button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
