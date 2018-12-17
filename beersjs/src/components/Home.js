import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Beers from './beers/Beers';
import RandomBeer from './beers/RandomBeers';
import NewBeer from './beers/NewBeer';


export default class Home extends Component {
  render() {
    return (
        <div>
            <Link to="/beers"><Beers/></Link>
            <Link to="/random"><RandomBeer/></Link>
            <Link to="/new"><NewBeer/></Link>
        </div>
    )
  }
}
