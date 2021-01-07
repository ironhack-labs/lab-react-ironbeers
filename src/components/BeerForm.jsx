import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import NavMain from '../components/NavMain';

class BeerForm extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by,
      })
      .then((apiResponse) => {
        this.props.history.push('/beers');
      });
  };

  render() {
    return (
      <div>
        <NavMain></NavMain>
        <h1 className="text-center m-2">Create a beer</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group m-2">
            <label htmlFor="name">Name</label>
            <input
              className="form-control "
              onChange={this.handleChange}
              value={this.state.name}
              id="name"
              name="name"
              type="text"
            />
          </div>
          <div className="form-group m-2">
            <label htmlFor="tagline">tagline</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              value={this.state.tagline}
              id="tagline"
              name="tagline"
              type="text"
            />
          </div>
          <div className="form-group m-2">
            <label htmlFor="description">description</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              value={this.state.description}
              id="description"
              name="description"
              type="text"
            />
          </div>
          <div className="form-group m-2">
            <label htmlFor="first_brewed">first_brewed</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              value={this.state.first_brewed}
              id="first_brewed"
              name="first_brewed"
              type="text"
            />
          </div>
          <div className="form-group m-2">
            <label htmlFor="brewers_tips">brewers_tips</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              value={this.state.brewers_tips}
              id="brewers_tips"
              name="brewers_tips"
              type="text"
            />
          </div>
          <div className="form-group m-2">
            <label htmlFor="attenuation_level">attenuation_level</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              value={this.state.attenuation_level}
              id="attenuation_level"
              name="attenuation_level"
              type="number"
            />
          </div>
          <div className="form-group m-2">
            <label htmlFor="contributed_by">contributed_by</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              value={this.state.contributed_by}
              id="contributed_by"
              name="contributed_by"
              type="text"
            />
          </div>
          <button type="submit" className="btn btn-primary m-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(BeerForm);
