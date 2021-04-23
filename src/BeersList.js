import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

class BeersList extends Component {
  state = {
    beerslist: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );

      this.setState({ beerslist: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        {this.state.beerslist.map((beer) => {
          return (
            <div key={beer._id} className="media m-3" >
              <Link to={`beers/${beer._id}`}>
              <img
                src={beer.image_url}
                width="40px"
                className="align-self-center mr-3"
                alt="beerImage"
              />
              </Link>
            <div>
                <h3 className="mt-0">{beer.name}</h3>
                <p>{beer.tagline}</p>
                <h5>Created by: {beer.contributed_by}</h5>
                
            </div>
            </div>
            
          );
        })}
      </div>
    );
  }
}

export default BeersList;
