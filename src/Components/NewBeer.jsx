import axios from 'axios';
import React, { Component } from 'react';
import Header from './../Components/Header';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
    formOk: false,
  };
  handleChange = (evt) => {
    const name = evt.target.name;
    const value =
      evt.target.name === 'attenuation_level'
        ? Number(evt.target.value)
        : evt.target.value;

    this.setState({ [name]: value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ formOk: true });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.formOk)
      axios
        .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
        .then((res) => {
          console.log('new beer created in DB: ', res);
          this.setState({
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: '',
            formOk: false,
          });
        })
        .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="name">Name </label>
          <input
            onChange={this.handleChange}
            id="name"
            name="name"
            value={this.state.name}
            type="text"
          />
          <br />
          <label htmlFor="tagline">Tagline </label>
          <input
            onChange={this.handleChange}
            id="tagline"
            name="tagline"
            value={this.state.tagline}
            type="text"
          />
          <br />
          <label htmlFor="description">Description </label>
          <textarea
            onChange={this.handleChange}
            name="description"
            id="description"
            value={this.state.description}
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <label htmlFor="first_brewed">First Brewed </label>
          <input
            onChange={this.handleChange}
            id="first_brewed"
            name="first_brewed"
            value={this.state.first_brewed}
            type="text"
          />
          <br />
          <label htmlFor="brewers_tips">Brewers Tips </label>
          <input
            onChange={this.handleChange}
            id="brewers_tips"
            name="brewers_tips"
            value={this.state.brewers_tips}
            type="text"
          />
          <br />
          <label htmlFor="attenuation_level">Attenuation Level </label>
          <input
            onChange={this.handleChange}
            id="attenuation_level"
            name="attenuation_level"
            type="number"
            value={this.state.attenuation_level}
          />
          <br />
          <label htmlFor="contributed_by">Contributed By </label>
          <input
            onChange={this.handleChange}
            id="contributed_by"
            name="contributed_by"
            value={this.state.contributed_by}
            type="text"
          />
          <br />
          <button>ADD NEW</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
