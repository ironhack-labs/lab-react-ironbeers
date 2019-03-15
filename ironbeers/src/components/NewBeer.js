import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";

import "./NewBeer.css";

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

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    const tagline = this.state.tagline;
    const description = this.state.description;
    const first_brewed = this.state.first_brewed;
    const brewers_tips = this.state.brewers_tips;
    const attenuation_level = this.state.attenuation_level;
    const contributed_by = this.state.contributed_by;
    axios
      .post("https://ironbeer-api.herokuapp.com/beers/new", {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by
      })
      .then(() => {
        this.props.getData();
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
        alert("Something went wrong");
      });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="NewBeer">
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group row">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </div>

            <div className="form-group row">
              <label>Tagline</label>
              <input
                type="text"
                name="tagline"
                value={this.state.tagline}
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </div>

            <div className="form-group row">
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </div>

            <div className="form-group row">
              <label>First Brewed</label>
              <input
                type="text"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </div>

            <div className="form-group row">
              <label>Brewers Tips</label>
              <input
                type="text"
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </div>

            <div className="form-group row">
              <label>Attenuation Level</label>
              <input
                type="number"
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </div>

            <div className="form-group row">
              <label>Contributed By</label>
              <input
                type="text"
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </div>

            <div className="control">
              <button type="submit" className="btn btn-primary">
                Add new
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewBeer;
