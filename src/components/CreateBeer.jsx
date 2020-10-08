import React from 'react';
import NavMain from './NavMain';
import BeersMoreDetails from './BeersMoreDetails';
import beerAPI from '../api/beerAPI';
import '../styles/create-beer.css';

class CreateBeer extends React.Component {
  state = {
    name: null,
    tagline: null,
    description: null,
    first_brewed: null,
    brewer_tips: null,
    attenuation_level: null,
    contributed_by: null,
  };
  handleChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    beerAPI.createOne({
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewer_tips: this.state.brewer_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    }).then((apiResponse) => {
        console.log(apiResponse);
    }).catch((error) => {
        console.log(error)
    })
  };

  render() {
    return (
      <div>
        <NavMain />
        <h1>Add a new beer</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="container">
            <label>Beer name: </label>
            <input onChange={this.handleChange} type="text" name="name" />
          </div>
          <div className="container">
            <label>Tagline: </label>
            <input onChange={this.handleChange} type="text" name="tagline" />
          </div>
          <div className="container">
            <label>Description: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="description"
            />
          </div>
          <div className="container">
            <label>First brew date: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="first_brewed"
            />
          </div>
          <div className="container">
            <label>Brewer tips: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="brewer_tips"
            />
          </div>
          <div className="container">
            <label>Attenuation level: </label>
            <input
              onChange={this.handleChange}
              type="number"
              name="attenuation_level"
            />
          </div>
          <div className="container">
            <label>Your name: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="contributed_by"
            />
          </div>
          <button>add this beer!</button>
        </form>
      </div>
    );
  }
}

export default CreateBeer;
