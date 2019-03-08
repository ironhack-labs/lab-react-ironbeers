import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    /*     const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tip,
      attenuation_level,
      contributed_by
    } = this.state;
 */
    let nuevaCervecita = this.state;
    nuevaCervecita.attenuation_level = 10;
    console.log(nuevaCervecita);
    console.log(typeof nuevaCervecita.attenuation_level);

    axios
      .post("https://ironbeer-api.herokuapp.com/beers/new", nuevaCervecita)
      .then(newBeer => {
        this.setState({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              className="input-group-text"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              name="tagline"
              value={this.state.tagline}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="first_brewed">First Brewed</label>
            <input
              type="text"
              name="first_brewed"
              value={this.state.first_brewed}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input
              type="text"
              name="brewers_tips"
              value={this.state.brewers_tips}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input
              type="text"
              name="attenuation_level"
              value={this.state.attenuation_level}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="contributed_by">Contributed By</label>
            <input
              type="text"
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={this.handleChange}
            />
          </div>

          <input type="submit" value="Create bew beer!" />
        </form>
      </div>
    );
  }
}

export default NewBeer;
