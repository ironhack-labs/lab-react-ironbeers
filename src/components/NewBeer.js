import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleFormSubmit = (event) => {
    // prevents page reload
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = this.state;
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      })
      .then(() => {
        this.props.refreshBeers();
        this.setState({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: 0,
          contributed_by: '',
        });
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Navbar />
        <img
          src={process.env.PUBLIC_URL + '/images/newbeer.jpg'}
          className="allbeers-image"
          alt="beers"
        />
        <div className="container">
          <div>
            <form onSubmit={this.handleFormSubmit}>
            <div style={{float:"left"}}>
              <label>Name:</label>
              <br />
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <br />
              <label>Tagline:</label>
              <br />
              <input
                type="text"
                name="tagline"
                value={this.state.tagline}
                onChange={this.handleChange}
              />
              <br />
              <label>Description:</label>
              <br />
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <br />
              <label>First Brewed:</label>
              <br />
              <input
                type="text"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={this.handleChange}
              />
              <br />
            </div>
            <div>
              <label>Brewers Tips:</label>
              <br />
              <input
                type="text"
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={this.handleChange}
              />
              <br />
              <label>Attenuation Level:</label>
              <br />
              <input
                type="number"
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={this.handleChange}
              />
              <br />
              <label>Contributed By:</label>
              <br />
              <input
                type="text"
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={this.handleChange}
              />
              <br />
              <br />
              </div>

              <input type="submit" value="Add New" />
              <br />
              <br />
            </form>
          </div>
          <div>
            <NavLink to="/beers/">
              <button>See all beers</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default NewBeer;
