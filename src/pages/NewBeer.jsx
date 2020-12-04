import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name; 

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by
      })
      .then(res => {
        console.log('successful post request', res);
        this.props.history.push('/beers');
      })
      .catch(err => {
        console.log('error post request', err);
      })

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Header />
        <h1>NEW BEER</h1>
        <form 
          className='new-beer_form' 
          onSubmit={this.handleSubmit}
        >

          <label htmlFor='name'>Name</label>
          <input 
            value={this.state.name}
            onChange={this.handleChange}
            type='text' 
            name='name' 
            id='name'
          />

          <label htmlFor='tagline'>Tagline</label>
          <input 
            value={this.state.tagline}
            onChange={this.handleChange}
            type='text' 
            name='tagline' 
            id='tagline'
          />

          <label htmlFor='description'>Description</label>
          <input 
            value={this.state.description}
            onChange={this.handleChange}
            className='new-beer_description'
            type='text' 
            name='description' 
            id='description' 
          />

          <label htmlFor='first_brewed'>First Brewed</label>
          <input 
            value={this.state.first_brewed}
            onChange={this.handleChange}
            type='text' 
            name='first_brewed' 
            id='first_brewed' 
          />

          <label htmlFor='brewers_tips'>Brewers Tips</label>
          <input 
            value={this.state.brewers_tips}
            onChange={this.handleChange}
            type='text' 
            name='brewers_tips' 
            id='brewers_tips' 
          />

          <label htmlFor='attenuation_level'>Attenuation Level</label>
          <input 
            value={this.state.attenuation_level}
            onChange={this.handleChange}
            type='number' 
            name='attenuation_level' 
            id='attenuation_level' 
          />

          <label htmlFor='contributed_by'>Contributed By</label>
          <input 
            value={this.state.contributed_by}
            onChange={this.handleChange}
            type='text' 
            name='contributed_by' 
            id='contributed_by'
          />

          <button className='new-beer_btn' type='submit'>
            ADD NEW
          </button>

        </form>
      </div>
    )
  }
}
