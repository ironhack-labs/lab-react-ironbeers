import React, { Component } from "react";
import BeerService from "../service/beer-services";
import homephoto from "../img/home-photo.png"

import { Link } from "react-router-dom";

class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { beer: {} };
    this.services = new BeerService();
  }

  componentDidMount() {
    this.services
      .getOneBeer(this.props.match.params.id)
      .then(theBeer => this.setState({ beer: theBeer }));
  }

  render() {
    return (
      <div className="container beer-detail">
        <p className="home-link">
          <Link to="/">
            <img src={homephoto} alt="home" />
          </Link>
        </p>
        <h1>{this.state.beer.name}</h1>

        <div className="row">
          <div className="col-md-8">
            <img
              src={this.state.beer.image_url}
              alt={this.state.beer.name}
            />
          </div>
          <div className="col-md-4">
            <h5>Eslogan:</h5>
            <p>{this.state.beer.tagline}</p>
            <h5>Primera Creación</h5>
            <p>{this.state.beer.first_brewed}</p>
            <h5>atenuacion level</h5>
            <p>{this.state.beer.attenuation_level}</p>
            <h5>contributed_by</h5>
            <p>{this.state.beer.contributed_by}</p> 
            <h5>description</h5>
            <p>{this.state.beer.description}</p>
            <Link to={"/beers"} className="btn btn-outline-dark">
              Volver
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerDetails;
