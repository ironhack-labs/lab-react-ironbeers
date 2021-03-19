import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewer_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    };
  }

  handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
      e.preventDefault();
      axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewer_tips: this.state.brewer_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by
      })
      .then((beer) => {
          console.log(beer);
          //<Redirect to="/beers"/>
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input onChange={this.handleChange} type="text" name="name" value={this.state.name}/>
          </div>
          <div>
            <label htmlFor="tagline">Tagline</label>
            <input onChange={this.handleChange} type="text" name="tagline" value={this.state.tagline}/>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input onChange={this.handleChange} type="text" name="description" value={this.state.description}/>
          </div>
          <div>
            <label htmlFor="first_brewed">First brewed on</label>
            <input onChange={this.handleChange} type="text" name="first_brewed" value={this.state.first_brewed}/>
          </div>
          <div>
            <label htmlFor="brewer_tips">Brewer tips</label>
            <input onChange={this.handleChange} type="text" name="brewer_tips" value={this.state.brewer_tips}/>
          </div>
          <div>
            <label htmlFor="attenuation_level">Attenuation level</label>
            <input onChange={this.handleChange} type="number" name="attenuation_level" value={this.state.attenuation_level}/>
          </div>
          <div>
            <label htmlFor="contributed_by">Contributed by</label>
            <input onChange={this.handleChange} type="text" name="contributed_by" value={this.state.contributed_by}/>
          </div>
          <button>Add beer!</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
