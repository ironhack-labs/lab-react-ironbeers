import React from 'react';
import axios from 'axios';
import './AllBeers.css';
//import { Route } from 'react-router-dom';

class AllBeers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      const beers = response.data;
      console.log('BEERS: ', beers);
      this.setState({ beers });
    });
  }
  alllBeers = (e) => {
    const listBeers = this.state.beers.map((b) => (
      <div className="anyBeer" key={b.key}>
        <img src={b.image_url} alt="beers" />
        <div className="pBeer">
          <h1>{b.name}</h1>
          <p>{b.tagline}</p>
          <b>Created by: {b.contributed_by}</b>
        </div>
      </div>
    ));
    console.log('BEERS List: ', listBeers);
    return listBeers;
  };

  render() {
    console.log('ALL: ', this.alllBeers);
    return <div className="beersList">{this.alllBeers()}</div>;
  }
}

export default AllBeers;
