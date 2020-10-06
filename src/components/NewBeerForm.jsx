import React, { Component } from 'react';
import '../stylesheets/NewBeerForm.css';
import NumberInput from './NumberInput';
import TextAreaInput from './TextAreaInput';
import TextInput from './TextInput';
import Axios from 'axios';

const validations = {
  name: (value) => value.length >= 1,
  tagline: (value) => value.length >= 1,
  description: (value) => value.length >= 1,
  first_brewed: (value) => value.length >= 1,
  brewers_tips: (value) => value.length >= 1,
  attenuation_level: (value) => value >= 1,
  contributed_by: (value) => value.length >= 1,
};

class NewBeerForm extends Component {
  state = {
    data: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    },
    error: {
      name: true,
      tagline: true,
      description: true,
      first_brewed: true,
      brewers_tips: true,
      attenuation_level: true,
      contributed_by: true,
    },
    touch: {}
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    const validationFn = validations[name];
    const isValid = validationFn(value);

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      },
      error: {
        ...this.state.error,
        [name]: !isValid
      }
    });
  };

  handleBlur = event => {
    const { name } = event.target;
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    });
  };

  handleSubmit = (event) => {
    const newBeer = this.state.data;
    event.preventDefault();

    Axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((response) => console.log(response))
      .catch((e) => console.error(e));
  };

  render() {
    const isIncomplete = Object.values(this.state.error).some(el => el === true);
    const {data, error, touch} = this.state;
    const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = data;
    return (
      <div className="form-wrapper">
        <h2>Create Your Own Beer!</h2>
        <form className="NewBeerForm" onSubmit={this.handleSubmit}>
          <TextInput
            name="name"
            value={name}
            handleBlur={this.handleBlur}
            handleChange={this.handleChange}
            placeholder="Your beer's name"
            error={error.name && touch.name}
          />
          <TextInput
            name="tagline"
            value={tagline}
            handleBlur={this.handleBlur}
            handleChange={this.handleChange}
            placeholder="Write a witty tagline"
            error={error.tagline && touch.tagline}
          />
          <TextAreaInput
            name="description"
            value={description}
            handleBlur={this.handleBlur}
            handleChange={this.handleChange}
            placeholder="Describe your Beer"
            error={error.description && touch.description}
          />
          <TextInput
            name="first_brewed"
            value={first_brewed}
            handleBlur={this.handleBlur}
            handleChange={this.handleChange}
            placeholder="dd/mm/yyyy"
            error={error.first_brewed && touch.first_brewed}
          />
          <TextInput
            name="brewers_tips"
            value={brewers_tips}
            handleBlur={this.handleBlur}
            handleChange={this.handleChange}
            placeholder="Tips"
            error={error.brewers_tips && touch.brewers_tips}
          />
          <NumberInput
            name="attenuation_level"
            value={attenuation_level}
            handleBlur={this.handleBlur}
            handleChange={this.handleChange}
            placeholder={0}
            error={error.attenuation_level && touch.attenuation_level}
          />
          <TextInput
            name="contributed_by"
            value={contributed_by}
            handleBlur={this.handleBlur}
            handleChange={this.handleChange}
            placeholder="Your name"
            error={error.contributed_by && touch.contributed_by}
          />

          <button
            className="NewBeerForm__submit"
            type="submit"
            disabled={isIncomplete}
          >
            Submit!
          </button>
        </form>
      </div>
    );
  }
}

export default NewBeerForm;
