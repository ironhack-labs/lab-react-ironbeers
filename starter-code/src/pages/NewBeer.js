import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import AddBeerForm from '../components/AddBeerForm';

import BEER_SERVICE from '../services/Service';

class NewBeer extends Component {
  state = {
    beer: [],
  };

  handleSubmit(event) {
    event.preventDefault();

    const [
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    ] = event.target;

    const newBeer = {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value,
      image_url: "https://images.punkapi.com/v2/keg.png"
    };

    BEER_SERVICE.create(newBeer)

    }

  render() {
    return (
      <div className="NewBeer">
        <Navbar />
        <div className="container  text-center mt-4">
          <h1>Add --> 🍺</h1>
          <AddBeerForm handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default NewBeer;