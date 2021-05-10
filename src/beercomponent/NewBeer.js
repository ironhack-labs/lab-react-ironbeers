import React, { Component } from 'react';
import axios from 'axios';

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
    message: '',
    error: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
      .then((response) => {
        console.log(response.data);
        this.setState({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: '',
          contributed_by: '',
          message: response.data.message,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const message = this.state.message && (
      <div className="alert alert-success" role="alert">
        {this.state.message}
      </div>
    );
    const notsaved = this.state.error && (
      <div className="alert alert-danger" role="alert">
        An error occured!!!
      </div>
    );
    return (
      <div className="container">
        <form className="m-1" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">name: </label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tagline">tagline: </label>
            <input
              className="form-control"
              type="text"
              name="tagline"
              id="tagline"
              value={this.state.tagline}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">description: </label>
            <textarea
              className="form-control"
              name="description"
              id="description"
              rows="5"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="first_brewed">first_brewed: </label>
            <input
              className="form-control"
              type="text"
              name="first_brewed"
              id="first_brewed"
              value={this.state.first_brewed}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="brewers_tips">brewers_tips: </label>
            <input
              className="form-control"
              type="text"
              name="brewers_tips"
              id="brewers_tips"
              value={this.state.brewers_tips}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="attenuation_level">attenuation_level: </label>
            <input
              className="form-control"
              type="number"
              name="attenuation_level"
              id="attenuation_level"
              value={this.state.attenuation_level}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contributed_by">contributed_by: </label>
            <input
              className="form-control"
              type="text"
              name="contributed_by"
              id="contributed_by"
              value={this.state.contributed_by}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary mb-2 mt-2" type="submit">
            Submit
          </button>
        </form>
        {message} {notsaved}
      </div>
    );
  }
}
