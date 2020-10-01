import React from 'react';
import axios from 'axios';

const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers/new';


export default class NewBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: null,
    contributed_by:''

  };

  submitBeer(event) {
      event.preventDefault()
    console.log('data send');

    const newBeer = this.state

    axios
    .post(apiUrl, {newBeer})
    .then(res => {
        console.log(res.data)
    })
    .then(window.location.href = '/')
    .catch(error => console.log(error))
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    const isFormValid = Object.values(this.state).every((value) => value)

    return (
      <div>
        <form action={apiUrl} onSubmit={() => this.submitBeer()} method="POST">
          <div className="form-group">
            <label htmlFor="name">Beer Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              placeholder="Enter beer name" name="name"
              onChange={(e) => this.handleChange(e)} value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              className="form-control"
              id="tagline"
              aria-describedby="tagline"
              placeholder="Enter beer tagline" name="tagline"
              onChange={(e) => this.handleChange(e)} value={this.state.tagline}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Beer Description</label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              aria-describedby="description"
              placeholder="Enter beer description" name="description"
              onChange={(e) => this.handleChange(e)} value={this.state.description}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="first_brewed">First Brewed Beer</label>
            <input
              type="text"
              className="form-control"
              id="first_brewed"
              aria-describedby="first_brewed"
              placeholder="Enter beer first_brewed" name="first_brewed"
              onChange={(e) => this.handleChange(e)} value={this.state.first_brewed}
            />
          </div>
          <div className="form-group">
            <label htmlFor="brewers_tips">Brewers Tips Beer</label>
            <input
              type="text"
              className="form-control"
              id="brewers_tips"
              aria-describedby="brewers_tips"
              placeholder="Enter beer brewers_tips" name="brewers_tips"
              onChange={(e) => this.handleChange(e)} value={this.state.brewers_tips}
            />
          </div>
          <div className="form-group">
            <label htmlFor="attenuation_level">Attenuation Level Beer</label>
            <input
              type="number"
              className="form-control"
              id="attenuation_level"
              aria-describedby="attenuation_level"
              placeholder="Enter beer attenuation_level" name="attenuation_level"
              onChange={(e) => this.handleChange(e)} value={this.state.attenuation_level}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contributed_by">Contributed By Beer</label>
            <input
              type="text"
              className="form-control"
              id="contributed_by"
              aria-describedby="contributed_by"
              placeholder="Enter beer contributed_by" name="contributed_by"
              onChange={(e) => this.handleChange(e)} value={this.state.contributed_by}
            />
          </div>
          <button className="button is-primary" onClick="submit" disabled={!isFormValid}>Add new beer</button>
        </form>
      </div>
    );
  }
}
