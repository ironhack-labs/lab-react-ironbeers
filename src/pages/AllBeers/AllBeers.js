import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

import './AllBeers.css';
import NavBar from '../../components/NavBar/NavBar';

class AllBeers extends Component {

  state = {
    allBeers: [],
    search: ""
  }

  getAllBeers = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((apiResponse) => {
        this.setState( { allBeers: apiResponse.data } )
      })
  }

  handleSearchSubmit = (event) => {
    const { value } = event.target
    this.setState( { search: value } )
    
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`)
    .then( (apiResponse) => {
      this.setState( {allBeers: apiResponse.data})
    })
    .catch( (err) => console.log(err));
  }

  componentDidMount() {
    this.getAllBeers()
    console.log(this.state.allBeers)
  }

  render() {

    const { allBeers } = this.state 

    return (
      <div>

        <NavBar />
        <input 
          type="text" 
          name="search" 
          placeholder="search for any beer" 
          value={this.state.search}
          onChange={this.handleSearchSubmit}
        />      

        {allBeers.map( (singleBeer) => {
            return(
              <div key={singleBeer._id} className="single-beer">
                <Link to={`/beers/${singleBeer._id}`}>
                  <div className="beer-img-wrapper">
                    <img src={singleBeer.image_url} alt="beer-img"/>
                  </div>
                </Link>
                  <div className="beer-text">
                    <Link to={`/beers/${singleBeer._id}`}>
                      <h2>{singleBeer.name}</h2>
                    </Link>
                    <h3>{singleBeer.tagline}</h3>
                    <p><span>Created by: </span>{singleBeer.contributed_by}</p>
                  </div>
              </div>
            )
        })}

      </div>
    )
  }
}

export default AllBeers;