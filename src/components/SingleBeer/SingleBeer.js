import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar';

import PunkAPI from 'punkapi-javascript-wrapper';

const punkapi = new PunkAPI();

class SingleBeer extends Component {
  state = {
    oneBeer: [],
  }

  componentDidMount() {
    punkapi.getBeer(this.props.match.params.beer)  
      .then(res => {
        this.setState({oneBeer: res});
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  displayBeer = () => {
    const beerDisplay = this.state.oneBeer.map((beer) => (
      <div key={beer.id}>
        <div >
          <img src={beer.image_url} alt={beer.name} height="200px" />
        </div>
        <div className="beer-information">
          <h1>{beer.name} {beer.attenuation_level}</h1>
          <h2>{beer.tagline} {beer.first_brewed}</h2>
          <p>{beer.description}</p>
          <h3>{beer.contributed_by}</h3>
        </div>
      </div>
    ));
    return beerDisplay;
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.displayBeer()}
      </div>
    );
  }
}

export default SingleBeer;