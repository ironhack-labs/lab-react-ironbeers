import React, { Component } from "react";
import { addABeer } from "../../services/beers";

export default class AddBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  };

  submit = async e => {
    e.preventDefault();
    await addABeer(this.state);
    this.props.history.push("/");
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameInput"
            />
          </div>
          <div className="form-group">
            <label htmlFor="tagLine">TagLine: </label>
            <input
              name="tagline"
              value={this.state.tagline}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              id="tagLine"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description: </label>
            <textarea
              style={{
                height: "100px"
              }}
              name="description"
              value={this.state.description}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              id="description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstBrewed">First Brewed: </label>
            <input
              name="first_brewed"
              value={this.state.first_brewed}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              id="firstBrewed"
              aria-describedby="firstBrewedInput"
            />
          </div>
          <div className="form-group">
            <label htmlFor="brewerTips">Brewer Tips: </label>
            <input
              name="brewers_tips"
              value={this.state.brewers_tips}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              id="brewerTips"
            />
          </div>
          <div className="form-group">
            <label htmlFor="attLevel">Attenuation Level: </label>
            <input
              name="attenuation_level"
              value={this.state.attenuation_level}
              onChange={this.handleInput}
              type="number"
              className="form-control"
              id="attLevel"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contributedBy">Contributed By: </label>
            <input
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              id="contributedBy"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            ADD NEW
          </button>
        </form>
      </div>
    );
  }
}
