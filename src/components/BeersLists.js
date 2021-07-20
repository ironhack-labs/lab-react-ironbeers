import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BeersList extends React.Component {
  state = {
    beers: [],
  };

  async componentDidMount() {
    try {
      let response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      console.log(response.data, 'allbeer');
      this.setState({
        beers: response.data,
      });
    } catch (error) {
      console.log('Failed to fetch beers ', error);
    }
  }

  render() {
    const { beers } = this.state;
    if (this.state.beers.length === 0) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <>
        <Header />
        <h4>List of Beers</h4>
        {beers.map((singleBeer) => {
          return (
            <div key={singleBeer.name}>
              <img src={singleBeer.image} alt={singleBeer.name} />
              <div>
                <Link to={`/beers/${singleBeer.id}`}>
                  <h2>{singleBeer.name}</h2>
                </Link>
                <span>{singleBeer.tagline}</span>
                <h6>{singleBeer.contributor}</h6>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default BeersList;
