import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class NewBeer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      // attenuation_level: '',
      // contributed_by: ''
    }
  }

  handleNameInput = (e) => {
    this.setState({
      ...this.props.newBeer,
      name: e.target.value
    })
  }

  handleTaglineInput = (e) => {
    this.setState({
      ...this.props.newBeer,
      tagline: e.target.value
    })
  }

  handleDescriptionInput = (e) => {
    this.setState({
      ...this.props.newBeer,
      description: e.target.value
    })
  }

  handleFirstBrewedInput = (e) => {
    this.setState({
      ...this.props.newBeer,
      first_brewed: e.target.value
    })
  }

  handleBrewersTips = (e) => {
    this.setState({
      ...this.props.newBeer,
      brewers_tips: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    axios.post("https://ironbeer-api.herokuapp.com/beers/new", this.state)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>

        <h2>Add a New Beer</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleNameInput} />

          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleTaglineInput} />

          <label htmlFor="description">Description</label>
          <input type="text" name="description" value={this.state.description} onChange={this.handleDescriptionInput} />

          <label htmlFor="firstBrewed">First brewed on</label>
          <input type="text" name="firstBrewed" value={this.state.first_brewed} onChange={this.handleFirstBrewedInput} />

          <label htmlFor="brewersTips">Brewer's tips</label>
          <input type="text" name="brewersTips" value={this.state.brewers_tips} onChange={this.handleBrewersTips} />

          <input type="submit" value="Add it!" />

        </form>
      </div>
    )
  }
}
