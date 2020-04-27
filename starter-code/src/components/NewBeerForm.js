import React, { Component } from 'react';

export default class NewBeerForm extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleInput = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level: parseInt(attenuation_level) || 0,
      contributed_by,
    };
    this.props.addBeer(newBeer);
  }

  render() {
    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
    return (
      <form className='new-beer'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          placeholder='My IPA'
          value={name}
          onChange={this.handleInput}
          />
  
        <label htmlFor='tagline'>Tagline</label>
        <input
          type='text'
          id='tagline'
          placeholder='Bitter golden goodness'
          value={tagline}
          onChange={this.handleInput}
          />
  
        <label htmlFor='description'>Description</label>
        <textarea
          type='text'
          id='description'
          placeholder='Originally created by homebrewer Mike in Barcelona during the COVID-19 lockdown of 2020...'
          value={description}
          onChange={this.handleInput}
          />
  
        <label htmlFor='first_brewed'>First Brewed</label>
        <input
          type='text'
          id='first_brewed'
          placeholder='04/2020'
          value={first_brewed}
          onChange={this.handleInput}
          />
  
        <label htmlFor='brewers_tips'>Brewers Tips</label>
        <input
          type='text'
          id='brewers_tips'
          placeholder='Decrease the mashing if you want a dryer beer'
          value={brewers_tips}
          onChange={this.handleInput}
          />
  
        <label htmlFor='attenuation_level'>Attenuation Level</label>
        <input
          type='number'
          id='attenuation_level'
          placeholder='75'
          value={attenuation_level}
          onChange={this.handleInput}
          />
  
        <label htmlFor='contributed_by'>Contributed By</label>
        <input
          type='text'
          id='contributed_by'
          placeholder='Michael'
          value={contributed_by}
          onChange={this.handleInput}
          />
        
        <button onClick={this.handleSubmit}>Add New</button>
      </form>
    )
  }
}
