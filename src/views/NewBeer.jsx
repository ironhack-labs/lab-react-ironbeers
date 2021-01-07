import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class NewBeer extends React.Component {
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
    console.log(event.target.value);
    const {
      name,
      value,
      // tagline,
      // description,
      // first_brewed,
      // brewers_tips,
      // attenuation_level,
      // contributed_by,
    } = event.target;
    this.setState({
      [name]: value,
      //   [tagline]: value,
      //   [description]: value,
      //   [first_brewed]: value,
      //   [brewers_tips]: value,
      //   [attenuation_level]: value,
      //   [contributed_by]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // console.log(this.state);
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by,
      })
      .then((apiResponse) => {
        this.props.history.push('/beers');
        // console.log("Created !");
        // console.log(apiResponse);
      });
  };

  render() {
    return (
      <div>
        <header>
          <Link exact to="/">
            Home
          </Link>
        </header>

        <h1>We'll have a form for adding new beers here</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            // value={this.state.name}
            id="name"
            name="name"
            type="text"
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            onChange={this.handleChange}
            // value={this.state.tagline}
            id="tagline"
            name="tagline"
            type="text"
          />
          <label htmlFor="description">Description</label>
          <input
            onChange={this.handleChange}
            // value={this.state.description}
            id="description"
            name="description"
            type="text"
          />
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            onChange={this.handleChange}
            // value={this.state.first_brewed}
            id="first_brewed"
            name="first_brewed"
            type="text"
          />
          <label htmlFor="brewers_tips">Brewers' Tips</label>
          <input
            onChange={this.handleChange}
            // value={this.state.brewers_tips}
            id="brewers_tips"
            name="brewers_tips"
            type="text"
          />
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            onChange={this.handleChange}
            // value={this.state.attenuation_level}
            id="attenuation_level"
            name="attenuation_level"
            type="number"
          />
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            onChange={this.handleChange}
            // value={this.state.contributed_by}
            id="contributed_by"
            name="contributed_by"
            type="text"
          />
          <button>Submit !</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
