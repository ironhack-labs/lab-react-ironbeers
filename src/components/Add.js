import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

class AddBeer extends Component {
  state = {
    image_url: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: 1,
    description: '',
    contributed_by: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by,
    } = this.state;
    attenuation_level = Number(attenuation_level);

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        image_url,
        name,
        tagline,
        first_brewed,
        attenuation_level,
        description,
        contributed_by,
      })
      .then((res) => {
        this.props.getData();
        this.setState({
          image_url,
          name,
          tagline,
          first_brewed,
          attenuation_level,
          description,
          contributed_by,
        });
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label>Image: </label>
          <input
            type="text"
            name="image"
            value={this.state.image_url}
            onChange={this.handleChange}
          />
          <label>Tagline: </label>
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={this.handleChange}
          />
          <label>First Brewed: </label>
          <input
            type="text"
            name="first-brewed"
            value={this.state.first_brewed}
            onChange={this.handleChange}
          />
          <label>Attenuation Level: </label>
          <input
            type="text"
            name="attenuation-level"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
          />
          <label>Description: </label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label>Contributed by: </label>
          <input
            type="text"
            name="contributed-by"
            value={this.state.contributed_by}
            onChange={this.handleChange}
          />
          <button type="submit">Create a Beer</button>
        </form>
      </div>
    );
  }
}

export default AddBeer;
