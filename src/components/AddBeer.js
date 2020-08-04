import React, { Component } from 'react';
import axios from 'axios';

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

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then((response) => console.log(response.data));
  };

  render() {
    return (
      <div className="row justify-content-center mt-4 mb-4">
        <div className="col-md-6">
          <h2>Add a new beer</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tagline">Tagline</label>
              <input
                type="text"
                name="tagline"
                onChange={this.handleChange}
                value={this.state.tagline}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="first_brewed">First brewed</label>
              <input
                type="text"
                name="first_brewed"
                onChange={this.handleChange}
                value={this.state.first_brewed}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="brewers_tips">Brewer tips</label>
              <input
                type="text"
                name="brewers_tips"
                onChange={this.handleChange}
                value={this.state.brewers_tips}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="attenuation_level">Attenuation level</label>
              <input
                type="number"
                name="attenuation_level"
                onChange={this.handleChange}
                value={this.state.attenuation_level}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contributed_by">Contributed by</label>
              <input
                type="text"
                name="contributed_by"
                onChange={this.handleChange}
                value={this.state.contributed_by}
                className="form-control"
              />
            </div>
            <input
              type="submit"
              value="Create beer"
              className="btn btn-success"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddBeer;
