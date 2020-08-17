import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';

class Beers extends Component {
  constructor() {
    super(); 
      this.state = { listOfBeers: [] };
  }

    getAllBeers = () => {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then(responseFromApi => {
        this.setState({
          listOfBeers: responseFromApi.data
        });
      });
    };
    
    componentDidMount() {
      this.getAllBeers();
    }
    
    render() {
      return (
        <div>
          <Navbar />
          <div>
            {this.state.listOfBeers.map(beer => {
              return (
                <div key={beer._id}>
                  <Link to={`/beers/${beer._id}`}>
                    <img src="beer.image" alt=""/>
                    <h3>{beer.name}</h3>
                    <h4>{beer.tagline}</h4>
                    <p>Created by: {beer.contributed_by}</p>
                  </Link> 
                </div>
              );
            })}
          </div>
        </div>
      )
    }
}

export default Beers;