import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Navbar from '../Navbar/navbar';
import './NewBeer.css';

class NewBeer extends Component {
  state = {
    Data: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: '',
    },
   /*  Redirect: false, */
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewer_tips: this.state.brewer_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by,
      })
      .then((response) => {
        this.props.history.push('/beers');

       /*  this.setState({ Redirect: true }); */
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <Navbar />
        <article className="NewBeer">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                className="form-control"
                id="name"
                onChange={this.handleChange}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="tagline">Tagline</label>
              <input
                required
                type="text"
                className="form-control"
                id="tagline"
                onChange={this.handleChange}
                name="tagline"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>

              <textarea
                name="description"
                className="form-control"
                id="description"
                onChange={this.handleChange}
                x
                rows={7}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="first_brewed">First Brewed</label>
              <input
                required
                type="text"
                className="form-control"
                id="first_brewed"
                onChange={this.handleChange}
                name="first_brewed"
              />
            </div>

            <div className="form-group">
              <label htmlFor="brewers_tips">Brewers Tips</label>
              <input
                required
                type="text"
                className="form-control"
                id="brewers_tips"
                onChange={this.handleChange}
                name="brewers_tips"
              />
            </div>

            <div className="form-group">
              <label htmlFor="attenuation_level">Attenuation level</label>
              <input
                required
                type="number"
                className="form-control"
                id="attenuation_level"
                onChange={this.handleChange}
                name="attenuation_level"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contributed_by">Contributed by</label>
              <input
                required
                type="text"
                className="form-control"
                id="contributed_by"
                onChange={this.handleChange}
                name="contributed_by"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary ">
                Create
              </button>
            </div>
          </form>
        </article>
      </div>
    );
  }
}

export default NewBeer;
