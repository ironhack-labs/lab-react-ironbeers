import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';

export default class Beers extends Component {
  state = {
    beers: [],
    searchText:''
  };

  componentDidMount() {
    console.log('Beers.js - component did mount');
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({ beers: result });
      })
      .catch((e) => console.log(e));
  }

  handleSearchInput = (e) => {
    let {value} = e.target;
    fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
    .then(res => res.json())
    .then(data => {
      console.log({data});
      this.setState({
        beers: data,
        searchText: value
      })
    })
   
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar
          searchText={this.state.searchText}
          handleSearchInput={this.handleSearchInput}
        />
        {this.state.beers.map((beer, key) => (
          <div key={beer._id}>
            <img src={beer.image_url} alt={beer.name} className="beerimg" />

            <Link to={`/beers/${beer._id}`}>
              <h1>{beer.name}</h1>
            </Link>

            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}
