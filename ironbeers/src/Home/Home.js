import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import NewBeer from '../NewBeer/NewBeer.js';
import RandomBeer from '../RandomBeer/RandomBeer.js'
import AllBeers from '../AllBeers/AllBeers.js'



class Home extends Component {
  

  render () {
      
      return (
        <div>
          hola
          <Link to='/randomBeer'>random</Link>
          <Link to='/newBeer'>new</Link>
          <Link to='/allBeers'>all</Link>

        </div>
          

      )
  }
}

export default Home;
