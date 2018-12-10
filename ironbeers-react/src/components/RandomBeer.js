import React, { Component } from 'react';
import axios from 'axios';

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
    }
  }
  getRandomBeer = () => {
    axios.get (`https://ironbeer-api.herokuapp.com/beers/random`)
    .then(responseFromApi => {
      this.setState({ beer: responseFromApi.data})
      console.log(this.state.beer)
    })
    .catch(err => {
      console.log("Something went wrong", err);
    });
  }
  componentDidMount() {
    this.getRandomBeer();
  }
  render() {
    let {beer} = this.state;
    if (this.state.beer) {
      return (
        <div>
          {this.state.beer.map(beer => {
            return (
              <div>
                <h2>Random Beer Details</h2>
                <img src={beer.image_url} />
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>Made in: {beer.first_brewed}</p>
                <p>Attenuation level: {beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>Contributed by: {beer.contributed_by}</p>
                <ul />
              </div>
            );
          })}
        </div>
      )
    } else {
      return <h1>Loading Random Beer</h1>
    }
    
  }
  
}
export default RandomBeer;
