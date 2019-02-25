import React, { Component } from 'react'
import Header from './header';
import beerService from './beerService';
import { Link } from 'react-router-dom';
import './home.css';
import './beers.css'


export default class Beers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      beer: []
    }
    this.beerService = new beerService();
    this.getBeers();
  }

  getBeers = () => {
    this.beerService.getBeers()
      .then(beer => {
        this.setState({ ...this.state, beer: beer })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div>

        <Header />

        <h1>All Beers</h1>

        {this.state.beer.map((beer, index) => {
           console.log(beer)
          return (
            <div key={index}>

               <Link to={`/beers/:beerId${beer._id}`}>{<h3>{beer.name}</h3>}</Link>

              <img className="imgbeers" src={beer.image_url} />
              <h4>{beer.tagline}</h4>
              <p>{beer.contributed_by}</p>
            </div>
          )
        })}

      </div>
    )
  }
}


