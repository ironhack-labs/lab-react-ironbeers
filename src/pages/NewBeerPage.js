import React from 'react';
import apiHandler from '../api/apiHandler';

class NewBeerPage extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    apiHandler
      .addABeer(this.state)
      .then((apiRes) => {
        this.props.history.push('/');
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 300,
            marginLeft: 580,
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handleChange}
          />

          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            id="tagline"
            name="tagline"
            onChange={this.handleChange}
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={this.handleChange}
          />

          <label htmlFor="first_brewed">First Brewed</label>
          <input
            type="text"
            id="first_brewed"
            name="first_brewed"
            onChange={this.handleChange}
          />

          <label htmlFor="brewers_tips">Brewers tips</label>
          <input
            type="text"
            id="brewers_tips"
            name="brewers_tips"
            onChange={this.handleChange}
          />

          <label htmlFor="attenuation_level">Attenuation level</label>
          <input
            type="number"
            id="attenuation_level"
            name="attenuation_level"
            onChange={this.handleChange}
          />

          <label htmlFor="contributed_by">Contributed by</label>
          <input
            type="text"
            id="contributed_by"
            name="contributed_by"
            onChange={this.handleChange}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewBeerPage;
