import React, { Component } from "react";
import BeerItem from "./BeerItem";
import { listBeers } from '../services/BeersService';
import Header from "./Header";


class BeersList extends Component {

  state = {
    beers: [],
    search:""
  }

  componentDidMount = () => {
    listBeers()   
        .then(response => {
          this.setState({ beers: response.data })
        })
        .catch(err => this.setState({ error: true }))
  }

  handleChangeSearch = (e) => {
    this.setState({ search: e.target.value })
  }
   
  render = () => {
    const beersList = () => this.state.beers
      .filter(beer => beer.name.toLowerCase().includes(this.state.search.toLowerCase()))
      .map(beer => {
        beer.name = (beer.name.length > 20) ? `${beer.name.slice(0, 20)} ...` : beer.name;
        beer.tagline = (beer.tagline.length > 35) ? `${beer.tagline.slice(0, 35)} ...` : beer.tagline;
        beer.contributed_by = (beer.contributed_by.length > 40) ? `${beer.contributed_by.slice(0, 40)} ...` : beer.contributed_by;
        return beer
      })
      .map(beer => <BeerItem key={beer._id} {...beer} />)

    return (
      <div className="BeersList">
        <Header />
        <div className="control has-margin-20">
          <input className="input" type="text" value={ this.state.search } onChange={ this.handleChangeSearch } placeholder="Search"/>
        </div>
        {beersList()}
      </div>   
    )
  }
}

export default BeersList;
