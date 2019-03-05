import React, { Component } from 'react';
import FormField from './services/FormField';
import axios from 'axios';

import { Redirect } from 'react-router-dom';


const validators = {
  name:     v => v.length > 0,
  tagline:    v => v.length > 0,
  description: v => v.length > 0,
  first_brewed: v => v.length > 0,
  brewers_tips:    v => v.length > 0,
  attenuation_level: v=> v.length > 0,
  contributed_by: v=> v.length >0
}

export default class NewBeers extends Component {
  state = {
    beer: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    },
    errors: {

    },
    touch: {},
    toBeer: false
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target

    const error = {
      [name]: !validators[e.target.name](type == 'checkbox' ? checked : value)
    }

    this.setState({
      beer: {
        ...this.state.beer,
        [name]: type == 'checkbox' ? checked : value
      },
      errors: {
        ...this.state.errors,
        ...error
      }
    });
  }

  handleBlur = (e) => {
    this.setState({
      touch: {
        ...this.state.touch,
        [e.target.name]: true
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    
        axios.post("https://ironbeer-api.herokuapp.com/beers/new", { ...this.state.beer
          // name: this.state.name,
          // tagline: this.state.tagline,
          // description: this.state.description,
          // first_brewed: this.state.first_brewed,
          // brewers_tips: this.state.brewers_tips,
          // attenuation_level: this.state.attenuation_level,
          // contributed_by: this.state.contributed_by
        })
      
    // this.setState({ toBeer: true }, () => this.props.onAddBeer({ ...this.state.beer }));
  };


  

  render = () => {
    if (this.state.toBeer) {
      return <Redirect exact to="/home"/>
    }

    const isError = Object.values(this.state.errors).some(error => error);

    return (
      <div className="NewBeers">
        <form onSubmit={this.handleSubmit}>
          <FormField title="Name" name="name" value={this.state.beer.name}
            onChange={this.handleChange}  error={this.state.errors.name}
            onBlur={this.handleBlur} touch={this.state.touch.name}/>

          <FormField title="Tagline" name="tagline" value={this.state.beer.tagline}
            onChange={this.handleChange}  type="text"
            error={this.state.errors.tagline} onBlur={this.handleBlur} touch={this.state.touch.tagline} />

          <FormField title="Description" name="description" value={this.state.beer.description}
            onChange={this.handleChange}  type="text"
            error={this.state.errors.description} onBlur={this.handleBlur} touch={this.state.touch.description} />

          <FormField title="First Brewed" name="first_brewed" value={this.state.beer.first_brewed}
            onChange={this.handleChange}  type="text"
            error={this.state.errors.first_brewed} onBlur={this.handleBlur} touch={this.state.touch.first_brewed} />

          <FormField title="Brewers Tips" name="brewers_tips" value={this.state.beer.brewers_tips}
            onChange={this.handleChange}  type="text"
            error={this.state.errors.brewers_tips} onBlur={this.handleBlur} touch={this.state.touch.brewers_tips} />

          <FormField title="Attenuation Level" name="attenuation_level" value={this.state.beer.attenuation_level}
            onChange={this.handleChange}  type="number"
            error={this.state.errors.attenuation_level} onBlur={this.handleBlur} touch={this.state.touch.attenuation_level} />

          <FormField title="Contributed By" name="contributed_by" value={this.state.beer.contributed_by}
            onChange={this.handleChange}  type="text"
            error={this.state.errors.contributed_by} onBlur={this.handleBlur} touch={this.state.touch.contributed_by} />

          <div className="control">
            <button className="button is-info" disabled={isError}>
              <span className="icon is-small">
                <i className="fas fa-plus"></i>
              </span>
              <span>Add</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}