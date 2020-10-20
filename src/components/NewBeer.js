import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

export default class NewBeer extends Component {
  state = {
    name: null,
    tagline: null,
    description: null,
    first_brewed: null,
    brewers_tips: null,
    attenuation_level: null,
    contributed_by: null,
    message: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = this.state;
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      })
      .then((res) => {
        console.log(res);
        this.setState({
          message:
            res.status === 200 ? res.data.message : `Something went wrong`,
        });
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Header />

        <form className="form-new-beer">
          <label>
            <strong className="form-input">Name</strong>
            <br />
            <input
              className="input"
              type="text"
              name="name"
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <label>
            <strong className="form-input">Tagline</strong>
            <br />
            <input
              className="input"
              type="text"
              name="tagline"
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <label>
            <strong className="form-input">Description</strong>
            <br />
            <input
              className="input-big"
              type="text"
              name="description"
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <label>
            <strong className="form-input">First Brewed</strong>
            <br />
            <input
              className="input"
              type="text"
              name="first_brewed"
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <label>
            <strong className="form-input">Brewers Tips</strong>
            <br />
            <input
              className="input"
              type="text"
              name="brewers_tips"
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <label>
            <strong className="form-input">Attenuation Level</strong>
            <br />
            <input
              className="input"
              type="number"
              name="attenuation_level"
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <label>
            <strong className="form-input">Contributed By</strong>
            <br />
            <input
              className="input"
              type="text"
              name="contributed_by"
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <button className="form-button" onClick={this.handleSubmit}>
            ADD NEW
          </button>

          {this.state.message && <div>{this.state.message}</div>}
        </form>
      </div>
    );
  }
}
