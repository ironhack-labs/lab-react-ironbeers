import React from "react";
import "./Beers.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

export default class Beers extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <ul className="beersList">
          {this.props.allBeers.map((beer, idx) => {
            return (
                <li className="beerCard" key={beer._id}>
              <Link to={"/" + beer._id}>
                  <img src={beer.image_url} alt={beer.name} />
                  <div className="beerInfo">
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <p>{beer.contributed_by}</p>
                  </div>
              </Link>
                </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
