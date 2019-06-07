import React, { Component } from 'react';
import BeerServices from "../service/beer-services";
import {Link} from "react-router-dom"
import BeerCard from './BeerCard';
import homephoto from "../img/home-photo.png"

class BeerList extends Component {
  constructor() {
    super();
    this.state = { beers: [] };
    this.services = new BeerServices();
  }

  componentDidMount() {
    this.services
      .getAllBeers()
      .then(allbeer => this.setState({ beers: allbeer }));
  }

  render() {
    console.log(this.state.beers)
    return (
      <div className="container">
        <p className="home-link">
          <Link to="/">
            <img src={homephoto} alt="home" />
          </Link>
        </p>
        <h1 className="list-title">Listado de cervezicas ricas</h1>
        <div className="row beer-list">
          <ul>
            {this.state.beers.map((beer, idx) => (
              <li key={idx}>
                <BeerCard key={idx} {...beer} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default BeerList;
