import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiHandler from '../api/apiHandler';
import Header from '../componets/Header';

class Beers extends Component {
  state = {
    beers: [],
    search:'',
  };

  componentDidMount() {
    apiHandler
      .getAllBeers()
      .then((apiRes) => {
        this.setState({ beers: apiRes.data });
      })
      .catch((apiError) => console.log(apiError));
  }

  handleSearch = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value })
    
  }

  render() {
    let filteredBeers = this.state.beers.filter((beer) => {
      return beer.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    return (
      
      <div className="beers">
        <Header />
        <label htmlFor="search">Search</label>
        <input type="text" id="search" onChange={this.handleSearch}></input>
        {filteredBeers.map((beer) => {
          return (
            <Link key={beer._id} to={'/beers/' + beer._id}>
              <div style={{ display: 'flex', justifyContent: 'start' }}>
                <img
                  style={{ width: '100px' }}
                  src={beer.image_url}
                  alt={beer.name}
                />
                <span>{beer.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Beers;
