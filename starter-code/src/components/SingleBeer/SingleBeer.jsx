import React, { Component } from "react";
import Header from "../Header";
import axios from "axios";
import "./SingleBeer.css";
import { Link, Switch, Route } from "react-router-dom";

export default class SingleBeer extends Component {
  constructor() {
    super();
    this.state = {
      beerDetail: null
    };
  }

  componentDidMount() {
    this.getOneBeers();
  }

  getOneBeers = () => {
    const { params } = this.props.match;
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
      .then(responseFromApi => {
        this.setState({ ...this.state, beerDetail: responseFromApi.data }
        );
      });
  };

  render() {
    return this.state.beerDetail ? (
      <div>
        <Header />
        <div>
          <div className="card-beer">
            <img src={this.state.beerDetail.image_url} alt={this.state.beerDetail.name} />
            <div>
              <h3>
                <Link to={this.state.beerDetail._id}>{this.state.beerDetail.name}</Link>
              </h3>
              <p>{this.state.beerDetail.tagline}</p>
              <p>Crated by: {this.state.beerDetail.contributed_by}</p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}
