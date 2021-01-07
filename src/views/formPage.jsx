import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class formPage extends Component {
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
        <h1>Form</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            id="name"
            name="name"
            type="text"
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            onChange={this.handleChange}
            value={this.state.occupation}
            id="tagline"
            name="tagline"
            type="text"
          />
          <label htmlFor="description">Description</label>
          <input
            onChange={this.handleChange}
            value={this.state.image}
            id="description"
            name="description"
            type="text"
          />
          <label htmlFor="first_brewed">First brewed</label>
          <input
            onChange={this.handleChange}
            value={this.state.image}
            id="first_brewed"
            name="first_brewed"
            type="text"
          />
          <label htmlFor="brewer_tips">Brewer Tips</label>
          <input
            onChange={this.handleChange}
            value={this.state.image}
            id="brewer_tips"
            name="brewer_tips"
            type="text"
          />
          <label htmlFor="attenuation_level ">Attenuation Level</label>
          <input
            onChange={this.handleChange}
            value={this.state.image}
            id="attenuation_level"
            name="attenuation_level"
            type="number"
          />
          <label htmlFor="contributed_by">Contributed by</label>
          <input
            onChange={this.handleChange}
            value={this.state.image}
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

export default withRouter(formPage);
