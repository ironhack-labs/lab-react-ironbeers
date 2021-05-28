import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";

class FormBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
    isSubmitted: false,
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({
      [key]: value,
    });
  };

  
  handleSubmit = (event) => {
    event.preventDefault();
    
    const beerToPost = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    };
    
    axios
    .post("https://ih-beers-api2.herokuapp.com/beers/new", beerToPost)
    .then((response) => {
      console.log(response.data);
        this.setState({
            isSubmitted: true,
          });
        })
        .catch((error) => {
          console.log(error);
        });
      };
      
      render() {
        if (this.state.isSubmitted) {
            return <Redirect to="/beers" />;
          }         


      return (
      <form onSubmit={this.handleSubmit} className="mx-auto" style={{width: "50%"}}>
        <div className="form-group mt-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="New beer name"
            value={this.state.name}
            onChange={this.handleChange}
            />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            name="tagline"
            id="tagline"
            className="form-control"
            placeholder="New beer tagline"
            value={this.state.tagline}
            onChange={this.handleChange}
            />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            className="form-control"
            placeholder="New beer description"
            value={this.state.description}
            onChange={this.handleChange}
            />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            type="text"
            id="first_brewed"
            name="first_brewed"
            className="form-control"
            placeholder="MM/YYYY"
            value={this.state.first_brewed}
            onChange={this.handleChange}
            />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input
            type="text"
            id="brewers_tips"
            name="brewers_tips"
            className="form-control"
            placeholder="Your tips"
            value={this.state.brewers_tips}
            onChange={this.handleChange}
            />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="number"
            id="attenuation_level"
            name="attenuation_level"
            className="form-control"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
            />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            type="text"
            id="contributed_by"
            name="contributed_by"
            className="form-control"
            placeholder="Your name"
            value={this.state.contributed_by}
            onChange={this.handleChange}
            />
        </div>
        <button type="submit" class="btn btn-primary mt-3">Add New</button>
      </form>
    );
  }
}

export default withRouter(FormBeer);