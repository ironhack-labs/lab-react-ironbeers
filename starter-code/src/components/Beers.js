import React, { Component } from 'react';
import Header from './Header'
import axios from 'axios';
import { Link } from "react-router-dom";

class Beers extends Component {
  
  state = {
    beers: []
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => {
      this.setState({beers: response.data})
    })
  }
  
  render() {

    return (
      <div>
        <Header />
        <h2>Beers</h2>
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