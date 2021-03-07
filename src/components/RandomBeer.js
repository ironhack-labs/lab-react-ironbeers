import axios from 'axios';
import React, { Component } from 'react';

export class RandomBeer extends Component {
  state = {
    singleBeer: {},
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((res) => {
        console.log(res);
        this.setState({ singleBeer: res.data });
      });
  }
  render() {
    return (
      <div key={this.state.singleBeer._id}>
        <img
          src={this.state.singleBeer.image_url}
          alt={this.state.singleBeer.name}
          width="45vw"
        />
        <p>Name: {this.state.singleBeer.name}</p>
        <p>Tagline {this.state.singleBeer.tagline}</p>
        <p>First brewed: {this.state.singleBeer.first_brewed}</p>
        <p>Description: {this.state.singleBeer.description}</p>
        <p>Contributed by: : {this.state.singleBeer.contributed_by}</p>
      </div>
    );
  }
}

export default RandomBeer;

// abv: 12.5
// attenuation_level: 83
// boil_volume: {value: 25, unit: "liters"}
// brewers_tips: "Authentic heather honey adds a beautiful floral top note that is unachievable any other way."
// contributed_by: "Sam Mason <samjbmason>"
// description: "Whisky cask-aged imperial scotch ale. Beer perfect for when the rain is coming sideways. Liquorice, plum and raisin temper the warming alcohol, producing a beer capable of holding back the Scottish chill."
// ebc: 84
// expireAt: "2021-03-07T21:22:28.697Z"
// first_brewed: "03/2010"
// food_pairing: (3) ["Kedgeree", "Scotch broth with sourdough bread", "Clootie dumpling"]
// ibu: 30
// image_url: "https://images.punkapi.com/v2/9.png"
// ingredients: {malt: Array(10), hops: Array(2), yeast: "Saflager S189"}
// method: {mash_temp: Array(1), fermentation: {…}, twist: "Scottish Heather Honey: 62.5g at middle, Add honey…After fermentation, age in a Scottish whisky cask"}
// name: "AB:07"
// ph: 5.6
// srm: 42
// tagline: "Whisky Cask-Aged Scotch Ale."
// target_fg: 1020
// target_og: 1106
// volume: {value: 20, unit: "liters"}
// _id: "5fb6a86265b9c209606e10e9"
