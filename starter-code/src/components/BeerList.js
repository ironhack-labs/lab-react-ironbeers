import React, { Component } from 'react'
import BeerCard from './BeerCard'
import { listBeers } from '../services/beersService';
import SearchBar from './searchBar';

class BeerList extends Component {

  state = {
    beers: [],
    error: false
  }
  
  componentDidMount = () => {
    listBeers()
        .then(response => this.setState({ beers: response.data }))
        .catch(err => this.setState({ error: true }))
  }

  onFilter = (search) => {
    const newBeers = this.state.beers.filter(beer => beer.name.toLowerCase().includes(search.toLowerCase()));
    this.setState({ 
      beers: newBeers
    });
  }

  render = () => {
    if (this.state.error) {
      return (<h1>Oops! Error!</h1>)
    } else {
      return (
        
        <div className="container">
        <div className="box">
        <SearchBar onFilter={this.onFilter}/>
        </div>
       
          {this.state.beers.map(beer => <BeerCard fromList="true" key={beer._id} {...beer}/>)}
        </div>
      )
    }
  }

}

export default BeerList