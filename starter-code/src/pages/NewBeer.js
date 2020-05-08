import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import FormComp from '../components/FormComp';

import BEER_SERVICE from '../services/beerService';

class NewBeer extends Component {
  state = {
    beer: [],
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value);

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
        <div className="container  text-left mt-4">
          <h2>Add a new beer</h2>
          <FormComp handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default NewBeer;
