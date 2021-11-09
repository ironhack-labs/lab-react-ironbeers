import React from 'react';
import Nav from './Nav';
import axios from 'axios';

class NewBeer extends React.Component {
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
    const nameOfField = event.target.name;
    this.setState({ [nameOfField]: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const beerInfo = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    };

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', beerInfo)
      .then((response) => {
        console.log('Added new beer successfully');
      })
      .catch((e) => {
        console.log('Could not add new beer', e);
      });

    this.setState({
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <h2>Add new beer:</h2>
        <div className="form">
          <form onSubmit={this.handleFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Tagline:
              <input
                type="text"
                name="tagline"
                value={this.state.tagline}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </label>
            <label>
              First brewed:
              <input
                type="text"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Brewers tips:
              <input
                type="text"
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Attenuation level:
              <input
                type="number"
                min={1}
                max={1000}
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={this.handleChange}
              />
            </label>
            <label>
              By:
              <input
                type="text"
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={this.handleChange}
              />
            </label>
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewBeer;
