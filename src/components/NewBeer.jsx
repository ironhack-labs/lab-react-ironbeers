import axios from 'axios';
import React, { Component } from 'react';
import NavBar from './NavBar';
import { Redirect } from 'react-router-dom';

class NewBeer extends Component {
  //create state empty to pass the value comning from the form
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: Number(''),
      contributed_by: '',
      beerAdded: false,
    };
  }

  handleChangeInput = (event) => {
    //show the input wrote from users. is saved in event.target.value
    console.log('event', event.target.value);
    this.setState({
      // save thr value as a new state
      [event.target.name]: event.target.value,
    });
  };

  handleSubmitNewBeer = (event) => {
    // submit the form with the new state
    event.preventDefault();

    const newBeerToAdd = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.brewers_tips,
      attenuation_level: this.attenuation_level,
      contributed_by: this.contributed_by,
    };
    console.log('newBeer', newBeerToAdd);

    axios //connect to server, and add(post) new beer(variable) to it
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeerToAdd)
      .then((response) => {
        console.log('response', response.data);
        this.setState({
          beerAdded: true, //change the state so we can use it later for the redirect
        });
      });
  };

  render() {
    if (this.state.beerAdded === true) {
      // when the state is true, do redirect
      return <Redirect to="/beers" />;
    }
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <h1>Add Your Beer</h1>

        <form onSubmit={this.handleSubmitNewBeer}>
          <label className="font-semibold">Name: </label>
          <input
            className="border border-black-md rounded-md my-3"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChangeInput}
          />
          <br></br>

          <label className="font-semibold">Tagline: </label>
          <input
            className="border border-grey-md rounded-md my-3"
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={this.handleChangeInput}
          />
          <br></br>

          <label className="font-semibold">Description: </label>
          <input
            className="border border-grey-3-md rounded-md my-3"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChangeInput}
          />
          <br></br>

          <label className="font-semibold">First Brewed: </label>
          <input
            className="border border-grey-3-md rounded-md my-3"
            type="text"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={this.handleChangeInput}
          />
          <br></br>

          <label className="font-semibold">Brewers Tips: </label>
          <input
            className="border border-grey-3-md rounded-md my-3"
            type="text"
            name="brewers_tips"
            value={this.state.brewers_tips}
            onChange={this.handleChangeInput}
          />
          <br></br>

          <label className="font-semibold">Attenuation Level: </label>
          <input
            className="border border-grey-3-md rounded-md my-3"
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.handleChangeInput}
          />
          <br></br>

          <label className="font-semibold">Contributed by: </label>
          <input
            className="border border-grey-3-md rounded-md my-3"
            type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={this.handleChangeInput}
          />
          <br></br>

          <button
            className="bg-green-200 border border-green rounded-md my-3 p-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
