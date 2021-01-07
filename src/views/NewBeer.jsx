import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import NavMain from './NavMain';
import { withRouter } from "react-router-dom";
import axios from "axios";

class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    firstBrewed: "",
    brewerTips: "",
    attenuationLevel: 0,
    contributedBy: "",
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
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        firstBrewed: this.state.firstBrewed,
        brewerTips: this.state.brewerTips,
        attenuationLevel: this.state.attenuationLevel,
        contributedBy: this.state.contributedBy,
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
        <label htmlFor="tagline">tagline</label>
        <input
          onChange={this.handleChange}
          value={this.state.tagline}
          id="tagline"
          name="tagline"
          type="text"
        />
        <label htmlFor="description">description</label>
        <input
          onChange={this.handleChange}
          value={this.state.description}
          id="description"
          name="description"
          type="text"
        />
        <label htmlFor="firstBrewed">firstBrewed</label>
        <input
          onChange={this.handleChange}
          value={this.state.firstBrewed}
          id="firstBrewed"
          name="firstBrewed"
          type="text"
        />
        <label htmlFor="brewerTips">brewerTips</label>
        <input
          onChange={this.handleChange}
          value={this.state.brewerTips}
          id="brewerTips"
          name="brewerTips"
          type="text"
        />
        <label htmlFor="attenuationLevel">attenuationLevel</label>
        <input
          onChange={this.handleChange}
          value={this.state.attenuationLevel}
          id="attenuationLevel"
          name="attenuationLevel"
          type="number"
        />
        <label htmlFor="contributedBy">contributedBy</label>
        <input
          onChange={this.handleChange}
          value={this.state.contributedBy}
          id="contributedBy"
          name="contributedBy"
          type="text"
        />
        <button>Add New</button>
      </form>
    );
  }
}

export default withRouter(NewBeer);
