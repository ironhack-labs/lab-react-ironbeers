import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import NewBeerService from './../services/axiospost';

class NewBeer extends Component {
  makeNew(event) {
    event.preventDefault();
    let beerObj = {
      name: event.target.newName.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: event.target.attenuation_level.value,
      contributed_by: event.target.contributed_by.value
    };
    console.dir(beerObj);
    // axios
    //   .post('https://ih-beers-api2.herokuapp.com/beers/new', beerObj)
    //   .then(this.props.history.push('/beers'));
    NewBeerService(beerObj).then(this.props.history.push('/beers'));
  }

  render() {
    return (
      <div>
        <header className="header-beers">
          <Link to="/"> home</Link>
        </header>
        <div className="image-top">
          <img src="/images/new-beer.png" alt="cerveza" />
        </div>
        <div className="new-beer-form">
          <form onSubmit={event => this.makeNew(event)}>
            <input required placeholder="name" type="text" name="newName" />
            <input required placeholder="tagline" type="text" name="tagline" />
            <input
              required
              placeholder="description"
              type="text"
              name="description"
            />
            <input
              required
              placeholder="first brud"
              type="text"
              name="first_brewed"
            />
            <input
              required
              placeholder="tips"
              type="text"
              name="brewers_tips"
            />
            <input
              required
              placeholder="attenuation"
              type="number"
              name="attenuation_level"
            />
            <input
              required
              placeholder="by who"
              type="text"
              name="contributed_by"
            />
            <button type="submit">New beer</button>
          </form>
        </div>
      </div>
    );
  }
}

export { NewBeer };
