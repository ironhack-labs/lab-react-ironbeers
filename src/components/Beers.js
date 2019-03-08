import React, { Component } from 'react';
import { listBeers, searchBeer } from '../services/BeersService';
import BeerItem from './BeerItem';
import SearchBar from './SearchBar';
import './Beers.css';

class Beers extends Component {
  state = {
    beers: []
  }

  componentDidMount = () => {
    listBeers()
      .then(response => {
        this.setState({ beers: response.data })
      })
  }

  onSearch = (search) => {
    if (search) {
      searchBeer(search)
        .then(response => this.setState({beers: response.data }))
    } else {
      this.componentDidMount();
    }
  }

  render = () => {
    if (this.state.error) {
      return (<h1 className="title">Ops, error</h1>);
    } else {
      return (
        <div class="main">
          <SearchBar  onSearch={this.onSearch}/>
          <div className="beersList">
            {this.state.beers.map((beer, index) => {
              return <BeerItem {...beer} key={index} />
            })}
          </div>
        </div>
      )
    }
  }
}

export default Beers;