import React from "react";
import axios from "axios";

class NewBeer extends React.Component {
  // componentDidMount() {
  //     axios.post("https://ih-beer-api.herokuapp.com/beers/new").then()
  // }

  handleChange = () => {};

  render() {
    return (
      <div>
        <h1>Add New Beer</h1>
        <form
          action="https://ih-beer-api.herokuapp.com/beers/new"
          method="post"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            name="tagline"
            id="tagline"
            value={this.state.tagline}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={this.state.description}
            onchange={this.handleChange}
          />
          <label htmlFor="first_brewed">First brewed</label>
          <input
            type="text"
            name="first_brewed"
            id="first_brewed"
            value={this.state.first_brewed}
            onchange={this.handleChange}
          />
          <label htmlFor="brewers_tips">Brewers tips</label>
          <input
            type="text"
            name="brewers_tips"
            id="brewers_tips"
            value={this.state.brewers_tips}
            onchange={this.handleChange}
          />
          <label htmlFor="attenuation_level">Attenuation level</label>
          <input
            type="number"
            name="attenuation_level"
            id="attenuation_level"
            value={this.state.attenuation_level}
            onchange={this.handleChange}
          />
          <label htmlFor="contributed_by">Contributed by</label>
          <input
            type="text"
            name="contributed_by"
            id="contributed_by"
            value={this.state.contributed_by}
            onchange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default NewBeer;
