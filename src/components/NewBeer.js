import React, { Component } from 'react';
import axios from 'axios';

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
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = async (event) => {
    event.preventDefault();
    const newBeer = await axios.post(
      'https://ih-beers-api2.herokuapp.com/beers/new',
      this.state
    );
    console.log(newBeer);
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
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = this.state;
    return (
      <>
        
        <form id="formb" onSubmit={this.handleSubmitForm}>
          <div id="div-searchs">
            <label> Name</label>
            <input
              id="searchs"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={name}
            />
          </div>

          <div id="div-searchs">
            <label> Tagline</label>
            <input
              id="searchs"
              type="text"
              name="tagline"
              onChange={this.handleChange}
              value={tagline}
            />
          </div>

          <div id="div-searchs">
            <label> Description</label>
            <textarea
              id="searchs"
              rows="5"
              cols="20"
              name="description"
              onChange={this.handleChange}
              value={description}
            />
          </div>

          <div id="div-searchs">
            <label> First Brewed</label>
            <input
              id="searchs"
              type="text"
              name="first_brewed"
              onChange={this.handleChange}
              value={first_brewed}
            />
          </div>

          <div id="div-searchs">
            <label> Brewers Tips</label>
            <input
              id="searchs"
              type="text"
              name="brewers_tips"
              onChange={this.handleChange}
              value={brewers_tips}
            />
          </div>

          <div id="div-searchs">
            <label> Attenuation Level</label>
            <input
              id="searchs"
              type="number"
              name="attenuation_level"
              onChange={this.handleChange}
              value={attenuation_level}
            />
          </div>

          <div id="div-searchs">
            <label> Contributed By</label>
            <input
              id="searchs"
              type="text"
              name="contributed_by"
              onChange={this.handleChange}
              value={contributed_by}
            />
          </div>

          <button id="butt" type="submit">
            Create
          </button>
        </form>
      </>
    );
  }
}

export default NewBeer;
