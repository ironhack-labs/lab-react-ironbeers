import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './NavBar';
import BeerService from "../services/beerService";


class Beers extends Component {
    constructor() {
        super()
        this.state = {
           beers: []
        }
        this.service= new BeerService()
    }


  componentDidMount() {
      this.service.getAllBeers()
    .then((api) => {
      this.setState({beers: api.data})
    })
  }

  
    render() {
        
    return (
        this.state.beers ? <div className = "container">
        <Navbar/>
        {this.state.beers.map((beer) => {
          return <Link to={`/${beer._id}`}>
            <div className ="beer-img">
                <img src={beer.image_url}/>
            </div>
            <div className="rest-info-beer">
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>{beer.contributed_by}</p>
            </div>
            </Link>
            })}
        </div>
         :
         <div>Loading</div>
    )
 }
}
export default Beers;