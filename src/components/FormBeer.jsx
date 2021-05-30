import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";
// name, image, type, jname

class FormBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: null,
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
        this.props.handleNewBeer(response.data);
        this.setState({
          isSubmitted: true,
        });
        this.props.history.push("/beers");
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
      <form onSubmit={this.handleSubmit}>
        <h3>Add a new beer</h3>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="tagline">tagline: </label>
          <input
            type="text"
            name="tagline"
            id="tagline"
            value={this.state.tagline}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">description: </label>
          <input
            type="text"
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="first_brewed">first brewed: </label>
          <input
            type="text"
            id="first_brewed"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="brewers_tips">brewers tips: </label>
          <input
            type="text"
            id="brewers_tips"
            name="brewers_tips"
            value={this.state.brewers_tips}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="attenuation_level">attenuation level: </label>
          <input
            type="number"
            id="attenuation_level"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="contributed_by">contributed by: </label>
          <input
            type="text"
            id="contributed_by"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={this.handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(FormBeer);