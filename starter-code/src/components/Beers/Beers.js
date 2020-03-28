import React, { Component } from "react";
import Header from "../Header/Header";
import "./Beers.css";

class Beers extends Component {
  render() {
    return (
      <div className="beers">
        <Header />
        {this.props.beers.map(beer => {
          return (
            <div className="beer">
              <img src={beer.image_url} alt="beer" />

              <div>
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;
