import React, { Component } from "react";
import apiHandler from "../apiHandler";
const api = new apiHandler();

export default class AddNewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
    success: null
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submitNewBeer = async e => {
    e.preventDefault();
    const beer = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by
    };

    try {
      await api.addBeer("/new", beer);
      this.setState({
        success: true
      });
    } catch (error) {
      this.setState({
        success: false
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.success === true && (
          <div className="alert alert-success" role="alert">
            Success! Your beer has been added.
          </div>
        )}
        {this.state.success === false && (
          <div className="alert alert-danger" role="alert">
            Oops... There was an error. Please retry.
          </div>
        )}

        <form className="container" onSubmit={this.submitNewBeer} onChange={this.handleInput}>
          <label htmlFor="name">Name</label>
          <input className="form-control" type="text" name="name" defaultValue={this.state.name} />
          <label htmlFor="tagline">Tagline</label>
          <input className="form-control" type="text" name="tagline" defaultValue={this.state.tagline} />
          <label htmlFor="description">Description</label>
          <textarea className="form-control" type="text" name="description" height="100px" defaultValue={this.state.description}></textarea>
          <label htmlFor="first_brewed">First Brewed</label>
          <input className="form-control" type="text" name="first_brewed" defaultValue={this.state.first_brewed} />
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input className="form-control" type="text" name="brewers_tips" defaultValue={this.state.brewers_tips} />
          <label htmlFor="attenuation_level">Attenuation</label>
          <input className="form-control" type="number" name="attenuation_level" defaultValue={this.state.attenuation_level} />
          <label htmlFor="contributed_by">Contributed By</label>
          <input className="form-control" type="text" name="contributed_by" defaultValue={this.state.contributed_by} />
          <button className="button btn-lg">Submit</button>
        </form>
      </div>
    );
  }
}
