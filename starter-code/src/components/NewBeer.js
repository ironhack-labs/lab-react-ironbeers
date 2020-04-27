import React, { Component } from 'react';
import Header from "./Header";

import axios from "axios";

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '', 
    first_brewed: '',
    brewer_tips: '',
    attenuation_level: 0,
    contributed_by: '', 
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  postBeer = () => {
    let newBeer = this.state;
    console.log(newBeer);
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        this.setState({
          error: error,
        })
      })
      this.setState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewer_tips: '',
        attenuation_level: 0,
        contributed_by: '', 
      })
  }

  render(){
    const { name, tagline, description, first_brewed, brewer_tips, attenuation_level, contributed_by } = this.state; 
    return(
    <div className='new-beer-container'>
      <Header />
      <div className='new-beer-form'>
        <div className='InputText'>
          <label htmlFor='name' >Name</label>
          <input 
            name='name'
            type='text'
            value={name}
            onChange={this.handleInput}
          />
        </div>
        <div className='InputText'>
          <label htmlFor='tagline' >Tagline</label>
          <input
            name='tagline'
            type='text'
            value={tagline}
            onChange={this.handleInput}
          />
        </div>
        <div className='InputText'>
          <label htmlFor='description'>Description</label>
          <textarea
            name="description"
            value={description}
            onChange={this.handleInput}
          />
        </div>
        <div className='InputText'>
          <label htmlFor='first_brewed' >First Brewer</label>
          <input 
            name='first_brewed'
            type='text'
            value={first_brewed}
            onChange={this.handleInput}
          />
        </div>
        <div className='InputText'>
          <label htmlFor='brewer_tips' >Brewer tips</label>
          <input
            name='brewer_tips'
            type='text'
            value={brewer_tips}
            onChange={this.handleInput}
          />
        </div>
        <div className='InputText'>
          <label htmlFor='attenuation_level' >Attenuation Level</label>
          <input
            name='attenuation_level'
            type='number'
            value={attenuation_level}
            onChange={this.handleInput}
          />
        </div>
        <div className='InputText'>
          <label htmlFor='contributed_by' >Contributed by</label>
          <input
            name='contributed_by'
            type='text'
            value={contributed_by}
            onChange={this.handleInput}
          />
        </div>
        <button className='button-beer'onClick={this.postBeer}>ADD NEW</button>
      </div>
    </div>
    )
  }
}

export default NewBeer; 