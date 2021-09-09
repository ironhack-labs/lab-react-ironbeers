import React from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import './NewBeer.css';

const initialState = {
  name: '',
  tagline: '',
  description: '',
  first_brewed: '',
  brewers_tips: '',
  attenuation_level: 0,
  contributed_by: '',
};

export default class NewBeer extends React.Component {
  state = { ...initialState };

  onChange = (event) => {
    const { name, value, type } = event.target;

    this.setState({
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  onSubmit = (event) => {
    if (
      !this.state.name ||
      !this.state.tagline ||
      !this.state.description ||
      !this.state.first_brewed ||
      !this.state.brewers_tips ||
      !this.state.attenuation_level ||
      !this.state.contributed_by
    ) {
      return;
    }
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new/${this.state}`)
      .then((response) => {
        console.log('Todo correcto');
      });
    this.setState({ ...initialState });
  };

  render() {
    return (
      <div className="NewBeer">
        <Navbar />
        <form className="NewBeer__form" onSubmit={this.onSubmit}>
          <div className="NewBeer__form__name">
            <label>
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Name of the beer"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="NewBeer__form__tagline">
            <label>
              <strong>Tagline</strong>
            </label>
            <input
              type="text"
              placeholder="Tagline of the beer"
              name="tagline"
              value={this.state.tagline}
              onChange={this.onChange}
            />
          </div>
          <div className="NewBeer__form__description">
            <label>
              <strong>Description</strong>
            </label>
            <input
              type="text"
              placeholder="Description  of the beer"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>
          <div className="NewBeer__form__first_brewed">
            <label>
              <strong>First brewed</strong>
            </label>
            <input
              type="text"
              placeholder="First brewed of the beer"
              name="first_brewed"
              value={this.state.first_brewed}
              onChange={this.onChange}
            />
          </div>
          <div className="NewBeer__form__brewers_tips">
            <label>
              <strong>Brewers tips</strong>
            </label>
            <input
              type="text"
              placeholder="Brewers tips of the beer"
              name="brewers_tips"
              value={this.state.brewers_tips}
              onChange={this.onChange}
            />
          </div>
          <div className="NewBeer__form__attenuation_level">
            <label>
              <strong>Attenuation level</strong>
            </label>
            <input
              type="number"
              min="0"
              placeholder="Attenuation level of the beer"
              name="attenuation_level"
              value={this.state.attenuation_level}
              onChange={this.onChange}
            />
          </div>
          <div className="NewBeer__form__contributed_by">
            <label>
              <strong>Contributed by</strong>
            </label>
            <input
              type="text"
              placeholder="Contributed by  of the beer"
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={this.onChange}
            />
          </div>
          <div className="NewBeer__form__button">
            <button>Add new item</button>
          </div>
        </form>
      </div>
    );
  }
}
