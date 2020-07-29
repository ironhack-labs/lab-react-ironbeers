import Header from './Header';
import React, { Component } from 'react';
import axios from 'axios'

export default class CreateBeer extends Component {
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

  handleChange = ({ target }) => {
    const attenuationLevel = target.name === 'attenuation_level';
    const value = attenuationLevel ? parseInt(target.value) : target.value;
    this.setState((state) => ({
      ...state,
      [target.name]: value,
    }));
  };

  handleSubmit = event => {
    event.preventDefault();

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then(response => { console.log(response.data.message) })
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div>
        <Header />
        <h1>Create Beer</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Beer Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Ironbeer"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="tagline">Tagline</label>
            <input
              className="form-control"
              type="text"
              name="tagline"
              placeholder="The beer to code"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              type="text"
              name="description"
              placeholder="Toasted and roasted"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="first_brewed">First brewed in</label>
            <input
              className="form-control"
              type="text"
              name="first_brewed"
              placeholder="03/2020"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="brewers_tips">Brewer's Tips</label>
            <input
              className="form-control"
              type="text"
              name="brewers_tips"
              placeholder="Brew before dawn"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input
              className="form-control"
              type="number"
              name="attenuation_level"
              placeholder="0"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contributed_by">Contributed by:</label>
            <input
              className="form-control"
              type="text"
              name="contributed_by"
              placeholder="Jep Cabestany"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
