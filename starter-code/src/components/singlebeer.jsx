import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SingleBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: {}
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let beerId = this.props.match.params.id;
    console.log(beerId);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
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
          <h1 className="loading-text">SATAN SATAN SATAN SATAN SATAN</h1>
        )}
        {beerToShow && (
          <div className="single-beer-card">
            <img src={beerToShow.image_url} alt="" />
            <h1>{beerToShow.name}</h1>
            <p>{beerToShow.tagline}</p>
          </div>
        )}
      </div>
    );
  }
}

export { SingleBeer };
