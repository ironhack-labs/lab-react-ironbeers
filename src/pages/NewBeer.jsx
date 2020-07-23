import React, { Component } from 'react';
import apiHandler from './../api/apiHandler';
import { Redirect } from 'react-router'


class NewBeer extends Component {
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
    const key = event.target.name;
    let value = event.target.value;
    console.log('key : ', key);
    console.log('value : ', value);
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .createNewBeer(this.state)
      .then(() =>
        this.setState({ message: 'New beer successfully saved to database' })
      )
      .then(() => console.log('message sent !'))
      .then(() => { this.setState({ redirect: true })} )
      .catch((apiError) => console.log(apiError));
  };

  render() {
      if (this.state.redirect) {
       return <Redirect to='/' />;
     }
    return (
      <form onSubmit={this.handleSubmit} className="NewBeer">
        <h2 className="title">Add a nice beer</h2>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              name="name"
              required
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Tagline</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              name="tagline"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              name="description"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Date of first brewed</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              name="first_brewed"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Brewers tips</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              name="brewers_tips"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Attenuation level</label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="attenuation_level"
              name="brewers_tips"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Contributed by</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              name="contributed_by "
              onChange={this.handleChange}
            />
          </div>
        </div>

        <p className="help is-success"> {this.state.message} </p>

        <div className="control">
          <button className="button is-link">ADD NEW</button>
        </div>
      </form>
    );
  }
}

export default NewBeer;
