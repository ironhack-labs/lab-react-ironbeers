import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../home/Home';
import homeBeer from '../../img/homeBeer.png';
import axios from'axios';


class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beerArray: []
    }  
  }
  
  getAllBeers() {
    axios.get("https://ih-beer-api.herokuapp.com/beers")
    .then(response => {
      this.setState({ 
        beerArray: response.data
      })
    })
  }

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div>
        <div>
          <Link to='/' component={Home}>
            <img src={homeBeer} alt='home-link' />
          </Link>
        </div>
        {this.state.beerArray.map((beerInfo, idx) => {
          return (
            <div key={beerInfo.id}>
              <Link to={`/beers/${beerInfo._id}`} >
                <img src={beerInfo.image_url} alt='beer package'/>
                <h1>{beerInfo.name}</h1>
                <h2>{beerInfo.tagline}</h2>
                <p>Created by: {beerInfo.contributed_by}</p>
              </Link>
            </div>
          )
        })}
      </div>
    );
  }
}


export default Beers;

