import React, { Component } from "react";
import Navbar from './Navigation';
import BeersService from "../services/beers.services";
//import {Link} from "react-router-dom";


class Beers extends Component {
  constructor() {
    super()

    this.state = {
      beers: []
    }

    this.service = new BeersService()
  }

  componentDidMount() {
    this.refreshBeers()
  }

  refreshBeers = () => {
    this.service.getAllBeers()
      .then(response => {
        const beers = response.data

        this.setState({ beers: beers })
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
     <>
        <Navbar />
        <h1>Beers List</h1>
        {this.state.beers.map( (beer, i) => 
            <div key={i} className="cont-beer">
                <div className="cont-img-beer">
                  <img src={beer.image_url} alt={beer.name} />
                </div>
                <div className="cont-beer-txt">
                  <p className="beerName">{beer.name}</p>
                  <p classNam="beerClaim" >{beer.tagline}</p>
                  <span>Created by: {beer.contributed_by}</span>
                </div>
            </div>
        )}

    </>
    )
  }
}

export default Beers