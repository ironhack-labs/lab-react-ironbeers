import React, { Component } from 'react';
import Axios from 'axios';
import Header from './Header';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
    const newBeer = this.state;

    Axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'attenuation_level') {
      this.setState({
        [name]: Number(value),
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <Header />
        <form
          onSubmit={this.handleFormSubmit}
          className="d-flex flex-column text-center m-3 p-3 w-75"
        >
          <h5 className="display-5 mb-3 pb-3">
            Insert a new beer.
          </h5>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Tagline</label>
            <input
              type="text"
              name="tagline"
              value={this.state.tagline}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="contributed_by"
              className="form-control"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>First Brewed</label>
            <input
              type="text"
              name="first_brewed"
              value={this.state.first_brewed}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Brewers Tips</label>
            <input
              type="text"
              name="brewers_tips"
              value={this.state.brewers_tips}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Attenuation Level</label>
            <input
              type="number"
              name="attenuation_level"
              className="form-control text-center"
              value={this.state.attenuation_level}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Contributed By</label>
            <input
              type="text"
              name="contributed_by"
              className="form-control"
              value={this.state.contributed_by}
              onChange={this.handleChange}
            />
          </div>
          <input className="btn btn-info my-3" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewBeer;
