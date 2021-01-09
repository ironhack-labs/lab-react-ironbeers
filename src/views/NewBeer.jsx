import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Newbeer extends React.Component {
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
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log('changing');
  };
  handleSubmit = (event) => {
    event.preventDefault();
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
      });
  };
  render() {
    return (
      <div>
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
        </nav>
        <h1>New Beer</h1>
        <form onSubmit={this.preventDefault}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            id="name"
            name="name"
            type="text"
          />
          <br />
          <label htmlFor="description">Description</label>
          <input
            onChange={this.handleChange}
            value={this.state.description}
            id="description"
            name="description"
            type="text"
          />
          <br />
          <label htmlFor="tagline">Tagline</label>
          <input
            onChange={this.handleChange}
            value={this.state.tagline}
            id="tagline"
            name="tagline"
            type="text"
          />
          <br />
          <label htmlFor="first_brewed">First brewed</label>
          <input
            onChange={this.handleChange}
            value={this.state.first_brewed}
            id="first_brewed"
            name="first_brewed"
            type="text"
          />
          <br />
          <label htmlFor="brewers_tips">Brewers tips</label>
          <input
            onChange={this.handleChange}
            value={this.state.brewers_tips}
            id="brewers_tips"
            name="brewers_tips"
            type="text"
          />
          <br />
          <label htmlFor="attenuation_level">Attenuation_level</label>
          <input
            onChange={this.handleChange}
            value={this.state.attenuation_level}
            id="attenuation_level"
            name="attenuation_level"
            type="number"
          />
          <br />
          <label htmlFor="contributed_by">Contributed_by</label>
          <input
            onChange={this.handleChange}
            value={this.state.contributed_by}
            id="contributed_by"
            name="contributed_by"
            type="text"
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Newbeer);
