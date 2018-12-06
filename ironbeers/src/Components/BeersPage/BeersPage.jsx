import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BeersPage.css"

export default class BeersPage extends Component {
  constructor() {
    super();
    this.state = {
      beers: null
    };
  }

  getBeers = () => {
    axios
      .get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(beer => {
        this.setState({ ...this.state, beers: beer.data })
      })
      .catch(error => console.log(error));
  };
  componentDidMount() {
    this.getBeers();
  }
  render() {

    return (this.state.beers) ? (
      <div>
        <div className="nav">
          <Link to={`/`}>Go to Home Page</Link>
        </div>
        {this.state.beers.map((beer, index) => {
          return <div className="Beer">
            <div className="BeerCard">
              <div className="Beerimage">
                <Link to={`/beers/${beer._id}`}> <img src={beer.image_url} /></Link>
              </div>
              <div className="Beerdetail">
                <div>
                  <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                </div>
                <div>
                  {beer.tagline}
                </div>
                <div>
                  <strong>Created by: </strong>
                  {beer.contributed_by.split(" ")[0]}
                </div>
              </div>
            </div>
          </div>
        })}
        <div />
      </div>
    ) : (<div>Loading...</div>);
  }
}