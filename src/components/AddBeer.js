import React, { Component } from 'react';
import { api } from '../api-config';

import Header from './Header';

export class AddBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    api
      .post('beers/new', this.state)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log('Error when submiting a new beer', err));
  };

  handleChange = ({ target }) => {
    const hasToParseValue = target.name === 'attenuation_level';
    const value = hasToParseValue ? parseInt(target.value) : target.value;
    this.setState((state) => ({
      ...state,
      [target.name]: value,
    }));
  };

  render() {
    return (
      <div>
        <Header />
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Tagline</label>
            <input
              type="text"
              className="form-control"
              name="tagline"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Example textarea</label>
            <textarea
              className="form-control"
              rows="4"
              name="description"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>First Brewed</label>
            <input
              type="text"
              className="form-control"
              name="first_brewed"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Brewer's Tips</label>
            <input
              type="text"
              className="form-control"
              name="brewers_tips"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Attenuation Level</label>
            <input
              type="number"
              className="form-control"
              name="attenuation_level"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Contributed by</label>
            <input
              type="text"
              className="form-control"
              name="contributed_by"
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" className="button" value="ADD BEER" />
        </form>
      </div>
    );
  }
}

export default AddBeer;
