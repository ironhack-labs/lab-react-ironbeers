import React, { Component } from "react";
import NavBar from "./NavBar";
import Service from "../service/Service";
import "./AllBeers.css";
import { Link } from "react-router-dom";

export default class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
    this.Service = new Service();
    this.getBeers();
  }

  getBeers = () => {
    this.Service.getBeers()
      .then(beers => {
        this.setState({ ...this.state, beers: beers });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <NavBar />
        {this.state.beers.map(beer => (
          <Link className="container" key={beer._id} to={`/beers/${beer._id}`}>
            <div>
              <img className="imgBeers" src={beer.image_url} />
            </div>
            <div>
              <h1>{beer.name}</h1>
              <h2>{beer.tagline}</h2>
              <p>{beer.contributed_by}</p>
            </div>
          </Link>
        ))}{" "}
      </div>
    );
  }
}
