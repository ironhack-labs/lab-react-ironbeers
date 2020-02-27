import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Beers.css";
import OneBeer from "./OneBeer";

class Beers extends Component {
  render() {
    let arrBeers = this.props.beers;
    console.log(this.props);
    return (
      <div className="beers">
        <div className="barNav">
          <Link to="/">
            <h2>All Beers</h2>
          </Link>
        </div>
        <div>
          <ul>
            {arrBeers.map((beer, idx) => (
              <OneBeer
                key={idx}
                image_url={beer.image_url}
                name={beer.name}
                tagline={beer.tagline}
                contributed_by={beer.contributed_by}
              ></OneBeer>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Beers;
