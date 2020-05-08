import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import BEER_SERVICE from '../services/Service';
import CardForAll from '../components/CardForAll';

class Beers extends Component {
  state = {
    beers: [],
  };
  async componentDidMount() {
    const { data } = await BEER_SERVICE.readAll();
    const beers = data.map(beer => ({ ...beer, key: beer._id }));
    this.setState({ beers });
  }
  render() {
    return (
      <div className="Beers">
        <Navbar />
        <div  >
          {this.state.beers.map(beer => (
            <CardForAll
              title={beer.name}
              text={beer.tagline}
              imgSrc={beer.image_url}
              route={`beer/${beer._id}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Beers;