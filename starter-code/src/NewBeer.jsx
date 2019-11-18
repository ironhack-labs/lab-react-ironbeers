import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const destination = "https://ih-beers-api2.herokuapp.com/beers/new";

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

  updateState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitNewBeer = e => {
    e.preventDefault();
    axios
      .post(destination, { ...this.state })
      .then(res => this.hasBeenSent(res))
      .catch(err => alert(err));
  };

  hasBeenSent = status => {
    console.log(status);
    this.props.history.push("/beers");
  };
  resetForm = () => {
    this.setState({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: "",
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Name..."
          value={this.state.name}
          name="name"
          onChange={this.updateState}
          autoFocus={true}
        />{" "}
        <br />
        <input
          type="text"
          value={this.state.tagline}
          name="tagline"
          onChange={this.updateState}
          placeholder="Tagline..."
        />{" "}
        <br />
        <input
          type="text"
          value={this.state.description}
          name="description"
          onChange={this.updateState}
          placeholder="Description..."
        />{" "}
        <br />
        <input
          type="text"
          value={this.state.first_brewed}
          name="first_brewed"
          onChange={this.updateState}
          placeholder="first_brewed..."
        />{" "}
        <br />
        <input
          type="text"
          value={this.state.brewers_tips}
          name="brewers_tips"
          onChange={this.updateState}
          placeholder="brewers_tips..."
        />{" "}
        <br />
        <input
          type="number"
          value={this.state.attenuation_level}
          name="attenuation_level"
          onChange={this.updateState}
          placeholder="0"
        />{" "}
        <br />
        <input
          type="text"
          value={this.state.contributed_by}
          name="contributed_by"
          onChange={this.updateState}
          placeholder="contributed_by..."
        />{" "}
        <br />
        <br />
        <button className="btn btn-primary" onClick={this.submitNewBeer}>
          Send
        </button>{" "}
        {" "}
        <button className="btn btn-danger" onClick={this.resetForm}>
          Reset
        </button>
        <br />
        <br />
        <Link to="/">
          <button className="btn btn-warning">Home</button>
        </Link>
      </div>
    );
  }
}
