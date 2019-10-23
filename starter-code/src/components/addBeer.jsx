import React, { Component } from "react";
import axios from "axios";

class AddBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      tagline: " ",
      description: " ",
      first_brewed: " ",
      brewers_tips: " ",
      attenuation_level: 0,
      contributed_by:" "
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    let {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    } = this.state;
    console.log(name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by)
    axios
      .post("https://ih-beers-api.herokuapp.com/beers/new", {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by
      })
      .then(() => {
        this.setState({ name: " ",
        tagline: " ",
        description: " ",
        first_brewed: " ",
        brewers_tips: " ",
        attenuation_level: 0,
        contributed_by:" " });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          </div>
          <div className="input-form">
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={e => this.handleChange(e)}
          />
          </div>
          <div className="input-form">
          <label>Description</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
          </div>
          <div className="input-form">
          <label>First brewed:</label>
          <input
            type="text"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={e => this.handleChange(e)}
          />
          </div>
          <div className="input-form">
          <label>Brewers tips:</label>
          <input
            type="text"
            name="brewers_tips"
            value={this.state.brewers_tips}
            onChange={e => this.handleChange(e)}
          />
          </div>
          <div className="input-form">
          <label>Attenuation level:</label>
          <input
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={e => this.handleChange(e)}
          />
          </div>
          <div className="input-form">
          <label>Contributed by:</label>
          <input
            type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={e => this.handleChange(e)}
          />
          </div>
          <input type="submit" value="Add New" />
        </form>
      </div>
    );
  }
}

export default AddBeers;
