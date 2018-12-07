import React, { Component } from "react";
import Header from "../Header";
import axios from "axios";
import "./ListBeers.css";
import { Link, Switch, Route } from "react-router-dom";


export default class ListBeers extends Component {
  constructor() {
    super();
    this.state = {
      listOfBeers: null
    };
  }

  getAllBeers = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(responseFromApi => {
        this.setState(
          { ...this.state, listOfBeers: responseFromApi.data },
        );
      });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return this.state.listOfBeers ? (
      <div>
        <Header />
        <div>
          {this.state.listOfBeers.map((beer, i) => {
            return (
              <div className="card-beer" key={i}>
                <img src={beer.image_url} alt={beer.name} />
                <div className="card-beer-text">
                  <h3><Link to={beer._id}>{beer.name}</Link></h3>
                  <p>{beer.tagline}</p>
                  <p>Crated by: {beer.contributed_by}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}
