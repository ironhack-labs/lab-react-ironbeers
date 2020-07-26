import React, { Component } from 'react';
import ironbeersApi from '../api/apiHandler';
import '../new_beer.css';

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  componentDidMount() {
    this.props.getCurrentPath(this.props.match.path);
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    ironbeersApi.addNewBeer(this.state).then((apiRes) => {
      console.log(apiRes);
      this.setState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
      });
      this.props.history.push('/beers');
    });
  };

  render() {
    return (
      <form className="new-beer-form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="name">Beer name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter beer name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>

        <div className="field">
          <label htmlFor="tagline">Beer tagline</label>
          <input
            id="tagline"
            name="tagline"
            type="text"
            placeholder="Enter beer tagline"
            onChange={this.handleChange}
            value={this.state.tagline}
          />
        </div>

        <div className="field">
          <label htmlFor="description">Beer description</label>
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Enter beer description"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </div>

        <div className="field">
          <label htmlFor="first_brewed">Creation date</label>
          <input
            id="first_brewed"
            name="first_brewed"
            type="month"
            placeholder="Enter beer creation date"
            onChange={this.handleChange}
            value={this.state.first_brewed}
          />
        </div>

        <div className="field">
          <label htmlFor="brewers_tips">Tips</label>
          <input
            id="brewers_tips"
            name="brewers_tips"
            type="text"
            placeholder="Enter beer tips"
            onChange={this.handleChange}
            value={this.state.brewers_tips}
          />
        </div>

        <div className="field">
          <label htmlFor="attenuation_level">Attenuation level</label>
          <input
            id="attenuation_level"
            name="attenuation_level"
            type="number"
            placeholder="Enter beer attenuation level"
            onChange={this.handleChange}
            value={this.state.attenuation_level}
          />
        </div>

        <div className="field">
          <label htmlFor="contributed_by">Beer creator</label>
          <input
            id="contributed_by"
            name="contributed_by"
            type="text"
            placeholder="Enter beer creator"
            onChange={this.handleChange}
            value={this.state.contributed_by}
          />
        </div>

        <button>Add new beer</button>
      </form>
    );
  }
}
