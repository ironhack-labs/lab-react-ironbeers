import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: {}
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(data => this.setState({ beer: data }));
  }

  render() {
    const beerToShow = this.state.beer.data;
    console.log(beerToShow);
    return (
      <div>
        <header className="header-beers">
          <Link to="/"> home</Link>
        </header>
        <div className="image-top">
          <img src="/images/new-beer.png" alt="cerveza" />
        </div>
        {!beerToShow && (
          <center>
            <h1 className="loading-text">SATAN SATAN SATAN SATAN SATAN</h1>
          </center>
        )}
        {beerToShow && (
          <div className="single-beer-card">
            <img src={beerToShow.image_url} alt="" />
            <h1>{beerToShow.name}</h1>
          </div>
        )}
      </div>
    );
  }
}
export { RandomBeer };
