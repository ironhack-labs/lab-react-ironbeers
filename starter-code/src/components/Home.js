import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import beers from "../images/beers.png";
import newbeer from "../images/new-beer.png";
import randombeer from "../images/random-beer.png";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>HomePage</h1>
               <ul>
                  <li> <Link to='/beers'><img src={beers} alt="Bier" className="beerListImg"/><h3>All Beers</h3></Link></li>
                  <li> <Link to='/randombeer'><img src={randombeer} alt="RandomBier" className="beerListImg"/><h3>Random Beer</h3></Link></li>
                  <li> <Link to='/newbeer'><img src={newbeer} alt="NewBeer" className="beerListImg"/><h3>New Beer</h3></Link> </li>
               </ul>
            </div>
        )
    }
}


