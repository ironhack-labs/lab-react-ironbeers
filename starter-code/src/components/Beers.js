import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


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
            <header>
            <Link to='/' class="navbar navbar-light bg-info text-light">
            <h1>HOME</h1>
            </Link>
            </header>
            <div className='each-beer'>
              {this.state.listOfBeers.map(beer => {
                return (
                  <div key={beer._id} className='beer'>
                    <Link to={`/beers/${beer._id}`}>
                    <img src={beer.image_url} className='beer-images' alt='imagen cerveza'></img>
                      <h3 className='text-beer'>{beer.name}</h3>
                      <hr></hr>
                      <h3 className='text-beer'>{beer.tagline}</h3>
                      <hr></hr>
                      <h4 className='text-beer'>Contributed by: {beer.contributed_by}</h4>
                      <hr></hr>
                    </Link>
                  </div>
                );
              })}
            </div>
            </div>
        );
      }
}



export default Beers
