import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const apiUrl = "https://ih-beers-api2.herokuapp.com/beers/";

export default class BeerList extends Component {
  // getAllBeers() {
  //     axios.get(apiUrl).then(beers => {
  //       cb(beers);
  //     });
  //   }
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  render() {
    return (
      <ul>
        {this.state.beers.map(beer => (
          <li key={beer._id}>
            <Link to={"/beers/" + beer._id}>
              <div className="little-beer-wrapper">
                <img src={beer.image_url} alt={beer.name} />
                <div className="little-text-wrapper">
                  <h3>{beer.name}</h3>
                  <p>{beer.tagline}</p>
                  <p className="citation">
                    <strong>Created by: </strong>
                    {beer.contributed_by}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount() {
    axios.get(apiUrl).then(beers => {
      this.setState({
        ...this.state,
        beers: beers.data
      });
    });
  }
}
