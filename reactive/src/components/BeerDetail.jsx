import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BeerDetail.css";

class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    };
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all").then(response => {
      const beerId = this.props.match.params.beerId;
      const beer = response.data.filter(beer => {
        return beer._id === beerId;
      })[0];
      this.setState({ beer: beer });
    });
  }
  render() {
    return (
      <div>
        <div className="navbar navbar-dark bg-primary justify-content-center">
          <Link to="/">
            <img src="/images/home.png" alt="" />
          </Link>
        </div>
        <div className="single-container container">
          <img src={this.state.beer.image_url} alt="" />
          <div className="row">
            <div className="col-10">
              <h2>{this.state.beer.name}</h2>
            </div>
            <div className="col-2">
              <p>{this.state.beer.attenuation_level}</p>
              </div>
          </div>
          <div className="row">
            <div className="col-9">
              <span>{this.state.beer.tagline}</span>
              </div>
              <div className="col-3">
              <p>{this.state.beer.first_brewed}</p>
            </div>
          </div>
          <p>{this.state.beer.description}</p>
          <p><b>Created by:</b> {this.state.beer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default BeerDetail;
