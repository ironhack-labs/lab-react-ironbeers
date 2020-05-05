// components/projects/ProjectList.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from './Nav'

class ListBeer extends Component {
  constructor(){
      super();
      this.state = { 
        listOfBeers: [],  
        search: "" };
      this.getAllProjects = this.getAllBeers.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
  }

  getAllBeers() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    .then(responseFromApi => {
      this.setState({
        listOfBeers: responseFromApi.data,
      })
    })
  }

  handleSearch(e) {
    this.setState({
      search: e.target.value.toLowerCase()
    })
  }



  componentDidMount() {
    this.getAllBeers();
  }

  render(){
    return(
      <div>
      <div>
      <Nav />

      <label>Search beer</label>
      <input type="text" name="search" onChange={this.handleSearch}></input>
      </div>
        <div>

          { this.state.listOfBeers.filter(item => item.name.toLowerCase().includes(this.state.search))
          .map( beer => {
            return (
              <div key={beer._id}>
              <img className="beer-img" src={beer.image_url} alt="img"/>
                <Link to={`/beer/${beer._id}`}>
                  <h3>{beer.name}</h3>
                </Link>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
              </div>
            )})
          }
        </div>

      </div>
    )
  }
}

export default  ListBeer;
