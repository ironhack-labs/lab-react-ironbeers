import React, { Component } from "react";
import { Link } from "react-router-dom";



export default class Home extends Component {
  render() {
    return (
        <div>
        <Link to={"/beers"}>
          <div>
            <img src="./images/beers.png" alt="" />
            <h2>All Beers</h2>
            <p>Hola quiero ir a todas las cervezas, y si puede ser beberme todas mañana en el Oportiño</p>
          </div>
        </Link>
        <Link to={"/random-beer"}>
          <div>
            <img src="./images/random-beer.png" alt="" />
            <h2>Random Beer</h2>
            <p>Enseñame la mejor cerveza que tengas, damelo todo, emborrachame joder</p>
          </div>
        </Link>
        <Link to={"/new-beer"}>
          <div>
            <img src="./images/new-beer.png" alt="" />
            <h2>New Beer</h2>
            <p>Voy a crear la cerveza mas parecida al Jager que exista para que vayan como cubas cuando se la beban</p>
          </div>
        </Link>
      </div>
    );
  }
}