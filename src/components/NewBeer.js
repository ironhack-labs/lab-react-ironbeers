import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios'

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewer_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewer_tips,
      attenuation_level,
      contributed_by,
    } = this.state;

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name,
        tagline,
        description,
        first_brewed,
        brewer_tips,
        attenuation_level,
        contributed_by,
      })
      .then((data) => {
        console.log('success', data);
        this.setState({ title: '', description: '' });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Header />
        <h1>Create a New Beer!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />

          <label>Tagline</label>
          <input
            name="tagline"
            type="text"
            value={this.state.tagline}
            onChange={this.handleChange}
          />
          <br />

          <label>Description</label>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br />

          <label>First Brewed: </label>
          <input
            name="first_brewed"
            type="text"
            value={this.state.first_brewed}
            onChange={this.handleChange}
          />
          <br />

          <label>Brewer Tips</label>
          <input
            name="brewer_tips"
            type="text"
            value={this.state.brewer_tips}
            onChange={this.handleChange}
          />
          <br />

          <label>Attenuation Level</label>
          <input
            name="attenuation_level"
            type="number"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
          />
          <br />

          <label>Contributed By</label>
          <input
            name="contributed_by"
            type="text"
            value={this.state.contributed_by}
            onChange={this.handleChange}
          />
          <br />

          <button className="submit-btn">Add New!</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
