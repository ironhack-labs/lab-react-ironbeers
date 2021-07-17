import React from 'react';
import axios from 'axios';

class NewBeers extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      'https://ih-beers-api2.herokuapp.com/beers/new',
      this.state
    );
    this.props.history.push('/');
  };
  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      attenuation_level,
      contributed_by,
      brewers_tips,
    } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
        </div>
        <div>
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            onChange={this.handleChange}
            value={tagline}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            onChange={this.handleChange}
            value={description}
          />
        </div>
        <div>
          <label>First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            onChange={this.handleChange}
            value={first_brewed}
          />
        </div>
        <div>
          <label>Brewers Tips</label>
          <input
            type="text"
            name="brewers_tips"
            onChange={this.handleChange}
            value={brewers_tips}
          />
        </div>
        <div>
          <label>Attenuation Level</label>
          <input
            type="text"
            name="attenuation_level"
            onChange={this.handleChange}
            value={attenuation_level}
          />
        </div>
        <div>
          <label>Contributed by</label>
          <input
            type="text"
            name="contributed_by"
            onChange={this.handleChange}
            value={contributed_by}
          />
        </div>
        <button type="submit">Add New</button>
      </form>
    );
  }
}
export default NewBeers;
