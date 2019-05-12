import React, { Component } from 'react';
import axios from 'axios';

import './index.css';

const initialFormState = {
  name: '',
  tagline: '',
  description: '',
  first_brewed: '',
  brewers_tips: '',
  attenuation_level: 0,
  contributed_by: ''
};

class NewBeer extends Component {
  state = {
    ...initialFormState,
    alert: null
  };

  handleChange = event => {
    const { target: input } = event;
    const { type, name, value } = input;

    this.setState({
      [name]: type === 'number' ? Number(value) : value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = 'https://ih-beer-api.herokuapp.com/beers/new';

    axios
      .post(endpoint, this.state)
      .then(res => {
        this.setState({
          ...initialFormState,
          alert: {
            type: 'success',
            message: 'Success!'
          }
        });
      })
      .catch(err =>
        this.setState({
          alert: {
            type: 'danger',
            message: 'Something went wrong!'
          }
        })
      );
  };

  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
      alert
    } = this.state;

    return (
      <section className="NewBeer">
        {alert && (
          <p className={`notification is-${alert.type}`}>{alert.message}</p>
        )}

        <form onSubmit={this.handleSubmit} className="form">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                name="name"
                value={name}
                className="input"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tagline</label>
            <div className="control">
              <input
                type="text"
                name="tagline"
                value={tagline}
                className="input"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                name="description"
                value={description}
                className="textarea"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">First Brewed</label>
            <div className="control">
              <input
                type="text"
                name="first_brewed"
                value={first_brewed}
                className="input"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Brewers Tips</label>
            <div className="control">
              <input
                type="text"
                name="brewers_tips"
                value={brewers_tips}
                className="input"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Attenuation Level</label>
            <div className="control">
              <input
                type="number"
                name="attenuation_level"
                value={attenuation_level}
                className="input"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Contributed By</label>
            <div className="control">
              <input
                type="text"
                name="contributed_by"
                value={contributed_by}
                className="input"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-link">
              Add New
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default NewBeer;
