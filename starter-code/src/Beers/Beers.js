import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Beers.css";
import OneBeer from "./OneBeer";

class Beers extends Component {
  render() {
    let arrBeers = this.props.beers;
    return (
      <div className="beers">
        <div className="barNav">
          <Link to="/">
            <h2>🏠</h2>
          </Link>
        </div>
        <div>
          <ul>
            {arrBeers.map((beer, idx) => (
              <Link to={`/beer/${beer._id}`}>
                <OneBeer
                  key={beer._id}
                  image_url={beer.image_url}
                  name={beer.name}
                  tagline={beer.tagline}
                  contributed_by={beer.contributed_by}
                ></OneBeer>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Beers;
