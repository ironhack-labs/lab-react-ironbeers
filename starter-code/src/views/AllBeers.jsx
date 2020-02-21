import React, { Component } from 'react';
import BeerCard from './partials/BeerCard';
import axios from 'axios';

class AllBeers extends Component {

  state = {
    beers : []
  }

  onSearch(e) {
    this.apiCall(e.target.value.toLowerCase())
  }

  apiCall(query) {
    let baseUrl = "https://ih-beers-api2.herokuapp.com/beers";
    let endPoint = !!query ? `/search?q=${query}` : '';
    axios.get(baseUrl + endPoint)
    .then((results) => {
      this.setState({beers:results.data})
    }).catch(err => console.log("Error : ", err))
  }

  componentDidMount() {
    this.apiCall()
  }

  render() {
    return (
      <div className="page allBeers">
        <div className="marginContainer searchBar">
          <input type="text" placeholder="Filter beers by name..." onChange={(e) => this.onSearch(e)} />
        </div>

        <div className="marginContainer">
          { this.state.beers.length > 0 ?
            this.state.beers.map((b, i) => (
            <BeerCard beer={b} key={i}/>
          ))
          : <p>Loading beers ...</p>
          }
        </div>
      </div>
    )
  }

}

export default AllBeers;
