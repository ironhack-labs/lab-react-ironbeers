import React from 'react';
import axios from 'axios';
import './NewBeer.css';
import Header from '../header/Header'

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
    const { name, type, value } = event.target;

    this.setState({
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
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
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, { ...this.state })
      .then((res) => {
        console.log('New beer created!');
      })
      .catch((err) => console.log(err));
    this.setState({ ...initialState });
  };

  render() {
    return (
      <div className="NewBeer">
      <Header />
        <form className="NewBeer__form">
          <div className="NewBeer__form__info">
            <label>
              <strong>Name</strong>
            </label>
            <input
              className="NewBeer__form__info__input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="NewBeer__form__info">
            <label>
              <strong>Tagline</strong>
            </label>
            <input
              className="NewBeer__form__info__input"
              type="text"
              name="tagline"
              value={this.state.tagline}
              onChange={this.onChange}
            />
          </div>
          <div className="NewBeer__form__info">
            <label>
              <strong>Description</strong>
            </label>
            <textarea
              className="NewBeer__form__info__input"
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>
          <div className="NewBeer__form__info">
            <label>
              <strong>First Brewed</strong>
            </label>
            <input
              className="NewBeer__form__info__input"
              type="text"
              name="first_brewed"
              value={this.state.first_brewed}
              onChange={this.onChange}
            />
          </div>
          <div className="NewBeer__form__info">
            <label>
              <strong>Brewers Tips</strong>
            </label>
            <input
              className="NewBeer__form__info__input"
              type="text"
              name="brewers_tips"
              value={this.state.brewers_tips}
              onChange={this.onChange}
            />
          </div>
          <div className="NewBeer__form__info">
            <label>
              <strong>Attenuation Level</strong>
            </label>
            <input
              className="NewBeer__form__info__input"
              type="number"
              name="attenuation_level"
              value={this.state.attenuation_level}
              onChange={this.onChange}
            />
          </div>
          <div className="NewBeer__form__info">
            <label>
              <strong>Contributed By</strong>
            </label>
            <input
              className="NewBeer__form__info__input"
              type="text"
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={this.onChange}
            />
          </div>
          <div>
            <button className="NewBeer__form__button"><strong>ADD NEW</strong></button>
          </div>
        </form>
      </div>
    );
  }
}