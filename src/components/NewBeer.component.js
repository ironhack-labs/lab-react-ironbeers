import axios from 'axios';
import React, { Component } from 'react';

export default class NewBeer extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attentuation_level: 0,
      contributed_by: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="columns is-centered mt-5">
        <div className="column is-half">
          <h1 className="title">New Beer</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  name="name"
                  className="input"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Tagline</label>
              <div className="control">
                <input
                  name="tagline"
                  className="input"
                  type="text"
                  value={this.state.tagline}
                  onChange={this.handleChange}
                  placeholder="Tagline"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input
                  name="description"
                  className="input"
                  type="text"
                  value={this.state.decscription}
                  onChange={this.handleChange}
                  placeholder="Description"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">First Brewed</label>
              <div className="control">
                <input
                  name="first_brewed"
                  className="input"
                  type="text"
                  value={this.state.first_brewed}
                  onChange={this.handleChange}
                  placeholder="First Brewed"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Brewers Tips</label>
              <div className="control">
                <input
                  name="brewers_tips"
                  className="input"
                  type="text"
                  value={this.state.brewers_tips}
                  onChange={this.handleChange}
                  placeholder="Brewers Tips"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Attenuation Level</label>
              <div className="control">
                <input
                  name="attentuation_level"
                  className="input"
                  type="number"
                  value={this.state.attentuation_level}
                  onChange={this.handleChange}
                  placeholder="Attenuation Level"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Contributed by</label>
              <div className="control">
                <input
                  name="contributed_by"
                  className="input"
                  type="text"
                  value={this.state.contributed_by}
                  onChange={this.handleChange}
                  placeholder="Contributed by"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-info">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
