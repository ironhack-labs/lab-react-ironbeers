import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

class AllBeers extends Component {
  state = {
    beers: [],
  };

  async componentDidMount() {
    let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers');

    this.setState({
      beers: res.data,
    });
  }

  displayAllBeers = () => {
    return this.state.beers.map((eachBeer) => {
      return (
          
          <div className="container">
           <Link to={`/beers/${eachBeer._id}`}><div className = "beerInfo">
              <img
                style={{ width: '90px' }}
                src={eachBeer.image_url}
                alt={eachBeer.name}
              />
              <div>
                <h1>{eachBeer.name}</h1>
                <h3>{eachBeer.tagline}</h3>
                <h6>Created by: {eachBeer.name}</h6>
              </div>
            </div>
            </Link>
          </div>
      );
    });
  };

  render() {
    return <div>
    <Header/>
    {this.displayAllBeers()}
    </div>;
  }
}

export default AllBeers;
