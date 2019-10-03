import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

export default class BeerList extends Component {
  constructor() {
    super();
    this.state = {
      allBeers: []
    };
  }
  
  componentDidMount() {
    this.getAllBeers();
  }

  getAllBeers = () => {
    axios
      .get(`http://localhost:5000/all`)

      .then(apiData => {
        this.setState({
          allBeers: apiData.data
        });
      });
  };

  render() {
    return (
      <div>
        <Header></Header>
        {this.state.allBeers.map(beer => {
          return (
            <div key={beer._id} className="beerlist-container">
              <div className="beer-photo">
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div className="info-beer">
                <Link className="beer-name" to={`/BeerDetail/${beer._id}`}>
                  {beer.name}
                </Link>
                <h4>{beer.tagline}</h4>
                <span>Created by: {beer.contributed_by}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
