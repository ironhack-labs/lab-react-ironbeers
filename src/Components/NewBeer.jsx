import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
    isSubmitted: false,
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.id;
    this.setState({
      [key]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const newBeer = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    };
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new/', newBeer)
      .then((res) => {
        console.log('submit');
        this.setState({ isSubmitted: true });
      })
      .catch((err) => console.log(err));
  };

  render() {
    if (this.state.isSubmitted) {
      return <Redirect to="/all" />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="tagline">Tagline : </label>
            <input
              type="text"
              name="tagline"
              id="tagline"
              value={this.state.tagline}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description : </label>
            <input
              type="text"
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="first_brewed">First Brewed : </label>
            <input
              type="text"
              name="first_brewed"
              id="first_brewed"
              value={this.state.first_brewed}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="brewers_tips">Brewers tips : </label>
            <input
              type="text"
              name="brewers_tips"
              id="brewers_tips"
              value={this.state.brewers_tips}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="attenuation_level">Attenuation Level : </label>
            <input
              type="number"
              name="attenuation_level"
              id="attenuation_level"
              value={this.state.attenuation_level}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="contributed_by">Contributed by : </label>
            <input
              type="text"
              name="contributed_by"
              id="contributed_by"
              value={this.state.contributed_by}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default withRouter(NewBeer);
