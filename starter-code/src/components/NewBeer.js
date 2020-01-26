import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

class NewBeer extends Component {

  constructor(props) {
    super(props)

    this.state={
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.handleFormSubmit(this.state);

    // const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;

    // console.log(name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by)

    // const IronBeers = axios.create({
    //   baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
    // });

    // IronBeers.post('/new', { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
    //   .then(message => {
    //     console.log(message);
    //     this.setState({
    //       name: '',
    //       tagline: '',
    //       description: '',
    //       first_brewed: '',
    //       brewers_tips: '',
    //       attenuation_level: 0,
    //       contributed_by: '',
    //     });
        this.props.history.push('/beers');
    //   })
    //   .catch(err => console.log('Error getting the beers', err));

  }

  render() {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.handleSubmit}>
          <div className="form-field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
          </div>
          <div className="form-field">
            <label htmlFor="tagline">Tagline</label>
            <input type="text" name="tagline" id="tagline" value={this.state.tagline} onChange={this.handleChange}/>
          </div>
          <div className="form-field">
            <label htmlFor="description">Description</label>
            <textarea type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange}/>
          </div>
          <div className="form-field">
            <label htmlFor="first_brewed">First Brewed</label>
            <input type="text" name="first_brewed" id="first_brewed" value={this.state.first_brewed} onChange={this.handleChange}/>
          </div>
          <div className="form-field">
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input type="text" name="brewers_tips" id="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange}/>
          </div>
          <div className="form-field">
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input type="number" name="attenuation_level" id="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange}/>
          </div>
          <div className="form-field">
            <label htmlFor="contributed_by">Contributed By</label>
            <input type="text" name="contributed_by" id="contributed_by" value={this.state.contributed_by} onChange={this.handleChange}/>
          </div>
          <button type="submit">ADD NEW</button>
        </form>
      </div>
    )
  }
}

export default NewBeer;
