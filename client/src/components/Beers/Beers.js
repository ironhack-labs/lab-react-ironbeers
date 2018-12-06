import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { LdsDualRing, SearchInput, BeerWrapper, StyledImg } from "./Beers.styled";

export default class Beers extends Component {
  state = {
    rawBeers: {},
    beers: {},
    loading: true
  };

  getBeersRaw() {
    return axios.get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(beers =>
        this.setState({
          ...this.state,
          rawBeers: beers.data,
          loading: false
        })
      )
      .catch(err => console.log(err));
  }

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

  searchBeer = (e) => {
    const searchVal = this.state.rawBeers.filter(elem => elem.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({
      ...this.state,
      beers: searchVal
    })
  }

  componentWillMount() {
    this.getBeers();
    this.getBeersRaw();
  }

  render() {
    if (!this.state.loading) {
      return (
        <React.Fragment>
          <SearchInput type="text" onChange={this.searchBeer}/>
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
