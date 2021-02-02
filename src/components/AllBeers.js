import React, { Component } from 'react';
import {
  Link,
} from "react-router-dom";

export default class AllBeers extends Component {
  state = {
    beers: [],
    searchInput: "",
    error: null,
    isLoaded: false
  }

  fetchBeers = (searchInput) => {
    const url = searchInput? `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchInput}` : "https://ih-beers-api2.herokuapp.com/beers";
    fetch(url)
      .then(res => res.json())
      .then(beersRaw => {
        return beersRaw.map(beerRaw => {
          const {_id: id, image_url: image, name, tagline, contributed_by: contributor} = beerRaw;
          return {id, image, name, tagline, contributor};
        })
      })
      .then(beers => {
        this.setState({
        beers,
        })
      },
      (error) => {
        this.setState({
          error
        })
      })
  }

  searchInputChangeHandler = (e) => {
    const searchInput = e.target.value;
    this.setState({
      searchInput
    });
    
    this.fetchBeers(searchInput);
  }

  componentDidMount() {
    this.fetchBeers();
  }

  render() {
    if(this.state.beers.length===0) {
      return (
        <div>
          <p>Sorry, no data</p>
        </div>
      )
    }

    return (
      <>
        <input onChange={this.searchInputChangeHandler} 
          type="search" 
          name="searchInput"
          value={this.state.searchInput}
        />
        <div className="container">
          {this.state.beers.map(beer => {
            return <div key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <div>
                <Link to={`/beers/${beer.id}`}>
                  <h2>{beer.name}</h2>
                </Link>              
                <span>{beer.tagline}</span>
                <h6>{beer.contributor}</h6>
              </div>
            </div>
          })}
        </div>
      </>
    )
  }
}
