import React, { Component } from 'react';
import Header from './Header'
import axios from 'axios';
import { Link } from "react-router-dom";

class Beers extends Component {
  
  state = {
    beers: [],
    search: ""
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => {
      this.setState({beers: response.data, filteredBeers: response.data})
    })
  }

  handleInputSearch = (e) => {
    const searchValue = e.target.value;
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchValue}`)
      .then(response => {
        this.setState({beers: response.data, search:searchValue})
      })
  };
  
  render() {

    return (
      <div>
        <Header />
        <h2>Beers</h2>
        <div className="flex-row pb-1">
          <label className="col-2" htmlFor="search">search</label>
          <input className="col-10" type="text" value={this.state.search} name="search" onChange={this.handleInputSearch}/>
        </div>
        {this.state.beers.length > 0 && 
          this.state.beers.map ((beer, index) => {
            return (
            <Link key={index} className="flex-row pb-1" to={`/beers/${beer._id}`}>
              <div className="col-4 img-container">
               <img src={beer.image_url} alt={beer.name} />
              </div>
              <div  className="col-8">
                <div>{beer.name}</div>
                <div>{beer.tagline}</div>
                <div>created by: {beer.contributed_by}</div>
              </div>
            </Link>)
          })
        }        
      </div>
    );
  }
}

export default Beers;