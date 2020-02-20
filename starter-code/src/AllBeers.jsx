import React, { Component } from "react";
// import axios from 'axios';
import { Link } from "react-router-dom";

class AllBeers extends Component {
  showTheBeers = () => {
    console.log(this.props.beers);
    return this.props.beers.map((eachBeer, i) => {
      return (
        <div className="beers">
          <Link
            key={i}
            to={`/BeerDetails/${this.props.beers[i]._id}`}
            style={{ color: "#000000", textDecoration: "none" }}
          >
            <div className="card flex-row flex-wrap">
              <img
                className="card-img-top ab"
                alt={eachBeer.name}
                src={eachBeer.image_url}
              />
              <div className="card-body">
                <h3 className="card-title">{eachBeer.name}</h3>
                <div className="card-text">{eachBeer.tagline}</div>
                <div className="card-text">
                  <i>Created by: {eachBeer.contributed_by}</i>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      // this.props.ready ? (this.showTheBeers()) : (`Loading...`)
      <div className='beers'>
        {this.showTheBeers()}
      </div>
      )
  }
}

export default AllBeers;
