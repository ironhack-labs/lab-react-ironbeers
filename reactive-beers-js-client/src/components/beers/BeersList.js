import React, { Component } from "react";

import {Link} from 'react-router-dom';

class BeersList extends Component {
  state = { listOfBeers: [] };

  getAllBeers = () => {
    fetch("https://ironbeer-api.herokuapp.com/beers/all").then(reponseApi => {
      reponseApi.json().then(data => {
        this.setState({ listOfBeers: data });
      });
    });
  };

  componentDidMount() {
    this.getAllBeers();
    console.log(this.props)
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        {this.state.listOfBeers.map((beers, index) => {
          return (
            <div key={index} className="card card-w  ">
              <Link to={`/beerlist/${beers._id}`}>
                <img
                  src={beers.image_url}
                  alt="cervezas"
                  className="item-list"
                />
              </Link>
              <div className="card-body">
                <h3 className="card-title">{beers.name}</h3>
                <p className="card-text">{beers.tagline}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BeersList;
