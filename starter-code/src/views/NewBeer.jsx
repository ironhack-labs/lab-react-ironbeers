import React, { Component } from "react";
import axios from "axios";

export default class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  };

  updateState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by
      })
      .then(apiRes => {
        this.setState({
          message: <p className="msg success">Beer successfully added !</p>
        });
        console.log(apiRes);
      })
      .catch(apiErr => {
        this.setState({ message: <p className="msg error">Error !</p> });
        console.error(apiErr);
      });
  };

  render() {
    console.log(this.state);
    return (
      <form
        id="signup"
        className="form"
        onChange={this.updateState}
        onSubmit={this.submitForm}
      >
        {this.state.message && this.state.message}
        <input
          onChange={this.updateState}
          type="text"
          name="name"
          className="input"
          placeholder="Name"
          defaultValue="Super beer"
        />
        <input
          onChange={this.updateState}
          type="text"
          name="tagline"
          className="input"
          placeholder="Tagline"
          defaultValue="Awesome"
        />
        <textarea
          onChange={this.updateState}
          type="text"
          name="description"
          className="input"
          placeholder="Description"
          defaultValue="Super beer description"
        />
        <input
          onChange={this.updateState}
          type="text"
          name="first_brewed"
          className="input"
          placeholder="First Brewed"
          defaultValue="Super beer First Brewed"
        />
        <input
          onChange={this.updateState}
          type="text"
          name="brewers_tips"
          className="input"
          placeholder="Brewer Tips"
          defaultValue="Super beer Brewer Tips"
        />
        <input
          onChange={this.updateState}
          type="number"
          name="attenuation_level"
          className="input"
          placeholder="50"
          defaultValue="50"
        />
        <input
          onChange={this.updateState}
          type="text"
          name="contributed_by"
          className="input"
          placeholder="Contributed by"
          defaultValue="Y"
        />
        <button className="btn">Create</button>
      </form>
    );
  }
}
