import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { LdsDualRing, BeerWrapper, StyledImg } from "./Beers.styled";

export default class Beers extends Component {
  state = {
    beers: {},
    loading: true
  };

  getBeers() {
    return axios.get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(beers =>
        this.setState({
          ...this.state,
          beers: beers.data,
          loading: false
        })
      )
      .catch(err => console.log(err));
  }

  componentWillMount() {
    this.getBeers();
  }

  render() {
    if (!this.state.loading) {
      return (
        <React.Fragment>
          {this.state.beers.map(elem => (
            <Link key={elem._id} to={`/beers/${elem._id}`}>
              <BeerWrapper>
                <StyledImg src={elem.image_url} alt={elem.name} />
                <div>
                  <h1>{elem.name}</h1>
                  <p>{elem.tagline}</p>
                  <p>Created by: {elem.contributed_by}</p>
                </div>
              </BeerWrapper>
            </Link>
          ))}
        </React.Fragment>
      );
    } else {
      return <LdsDualRing />;
    }
  }
}
