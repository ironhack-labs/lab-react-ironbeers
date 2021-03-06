import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class ListBeers extends Component {
  state = {
    allBeers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      console.log(res.data);
      this.setState({
        allBeers: res.data,
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.allBeers.map((eachBeer) => {
          return (
            <div key={eachBeer._id}>
              <img src={eachBeer.image_url} alt={eachBeer.name} width="25vw" />
              <Link to={`/beers/${eachBeer._id}`}>
                <p>Name: {eachBeer.name}</p>
              </Link>
              <p>Tagline: {eachBeer.tagline}</p>
              <p>Contributed by: {eachBeer.contributed_by}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListBeers;

// abv: 4.1
// attenuation_level: 76
// boil_volume: {value: 25, unit: "liters"}
// brewers_tips: "Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort."
// contributed_by: "Sam Mason <samjbmason>"
// description: "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist."
// ebc: 15
// expireAt: "2021-03-06T01:46:42.533Z"
// first_brewed: "04/2008"
// food_pairing: (4) ["Fresh crab with lemon", "Garlic butter dipping sauce", "Goats cheese salad", "Creamy lemon bar doused in powdered sugar"]
// ibu: 41.5
// image_url: "https://images.punkapi.com/v2/2.png"
// ingredients: {malt: Array(3), hops: Array(4), yeast: "Wyeast 1056 - American Ale™"}
// method: {mash_temp: Array(1), fermentation: {…}, twist: null}
// name: "Trashy Blonde"
// ph: 4.4
// srm: 15
// tagline: "You Know You Shouldn't"
// target_fg: 1010
// target_og: 1041.7
// volume: {value: 20, unit: "liters"}
// _id: "5fb6a86265b9c209606e10e0"
