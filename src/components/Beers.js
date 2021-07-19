import React, { Component } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Beers extends Component {
  state = {
    beers: null,
  };

  getBeers = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({
          beers: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getBeers();
  }

  render() {
    if (!this.state.beers) return <> </>;

    return (
      <>
        <header>
          <Link to="/">
            <img src="/assets/home-white.png" alt="home" />
          </Link>
        </header>
        <div>
          {this.state.beers.map((beer) => {
            return (
              <div className='beer-container' key={beer._id}>
                <img src={beer.image_url} alt={beer.name} />
                <div className='beer-box'>
                  <h2>{beer.name}</h2>
                  <h4>{beer.tagline}</h4>
                  <h6>
                    <b>Created by: </b>{beer.contributed_by.slice(0,9)}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
