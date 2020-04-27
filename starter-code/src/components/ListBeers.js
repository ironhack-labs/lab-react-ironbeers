import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from "react-router-dom";
import SearchBeer from './SearchBeer';

const STATUS = {
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR",
};

class ListBeers extends Component {
  state= {
    beers: [],
    status: STATUS.LOADING,
  }

  componentDidMount = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data)
        this.setState({
          beers: response.data,
          status: STATUS.LOADED,
        })
      })
      .catch ((error)=> {
        this.setState({
          status: STATUS.ERROR
        })
      })
  }

  displayBeers = () => {
    const { beers } = this.state;
    return beers.map((beer, index) => {
      return (
        <div className='beer-list' key={index}>
          <Link className='container-beer-list' to={`/beers/${beer._id}`}>
            <img className='beer-img-list' src={beer.image_url} alt={beer.name} />
            <div className='info-beer-list'>
              <span className='title-beer-list'>{beer.name}</span>
              <span className='tagline-beer-list'>{beer.tagline}</span>
              <span className='created-beer-list'><strong>Created by:</strong> {beer.name}</span>
            </div>
          </Link>
        </div>
      );
    })
  }

  changeBeers = (newbeers) => {
    console.log('New', newbeers)
    this.setState({
      beers: newbeers
    })
  }
  render(){
    const { status } = this.state;
    switch (status) {
      case STATUS.LOADED:
        return (
        <div>
          <Header />
          <SearchBeer changeBeers={this.changeBeers} />
          <div className='list-container'>
            {this.displayBeers()}
          </div>
        </div>
        )
      case STATUS.LOADING:
        return (
          <div className='list-container'>
            <Header />
            <div className="loader"></div>
          </div>
        )
      case STATUS.ERROR:
        return(
          <div className='list-container'>
            <Header />
            <p>ERROR</p>
          </div>
        )
    }
  }
}
export default ListBeers; 
