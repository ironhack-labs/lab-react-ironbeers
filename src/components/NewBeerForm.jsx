import React, { Component } from 'react';
import '../stylesheets/NewBeerForm.css';
import NumberInput from './NumberInput';
import TextAreaInput from './TextAreaInput';
import TextInput from './TextInput';
import Axios from 'axios';

class NewBeerForm extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = event => {
      const newBeer = this.state;
      event.preventDefault();

      Axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        .then(response => console.log(response))
        .catch(e => console.error(e));
  };

  render() {
    return (
      <div className="form-wrapper">
        <h2>Create Your Own Beer!</h2>
        <form className="NewBeerForm" onSubmit={this.handleSubmit}>
          <TextInput
            name="name"
            value={this.state.name}
            handleChange={this.handleChange}
            placeholder="Your beer's name"
          />
          <TextInput
            name="tagline"
            value={this.state.brewer}
            handleChange={this.handleChange}
            placeholder="Write a witty tagline"
          />
          <TextAreaInput
            name="description"
            value={this.state.description}
            handleChange={this.handleChange}
            placeholder="Describe your Beer"
          />
          <TextInput
            name="first_brewed"
            value={this.state.brewer}
            handleChange={this.handleChange}
            placeholder="dd/mm/yyyy"
          />
          <TextInput
            name="brewers_tips"
            value={this.state.brewer}
            handleChange={this.handleChange}
            placeholder="Tips"
          />
          <NumberInput
            name="attenuation_level"
            value={this.state.brewer}
            handleChange={this.handleChange}
            placeholder={0}
           />
          <TextInput
            name="contributed_by"
            value={this.state.brewer}
            handleChange={this.handleChange}
            placeholder="Your name"
          />

          <button className="NewBeerForm__submit"  type="submit">
            Submit!
          </button>
        </form>
      </div>
    );
  }
}

export default NewBeerForm;
