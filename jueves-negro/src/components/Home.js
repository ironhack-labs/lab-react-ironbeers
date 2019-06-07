import React, { Component } from 'react';
import {Link} from "react-router-dom"
import beersImage from "../img/beers.png"
import newBeer from "../img/new-beer.png";
import randomBeer from "../img/random-beer.png"

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>3 son los pasos a seguir</h1>
        <ol>
          <li>
            <Link to="/birraList">
            <img src={beersImage} alt="beers" />
              Toda la consumición de la noche de tu persona
            </Link>
          </li>
          <li>
            <Link to="/birraDeBorracho">
            <img src={randomBeer} alt="random beer" />

            Que tomar borracho?</Link>
          </li>
          <li>
            <Link to="/nuevaBirra">
            <img src={newBeer} alt="new beer" />

            Nueva bebida que añadir a tu noche</Link>
          </li>
        </ol>
      </div>
    );
  }
}

export default Home;
