import React from 'react';
import {Link} from 'react-router-dom';
import { Beers } from '../components/Beers';
import { NewBeer } from '../components/NewBeer';
import { RandomBeers } from '../components/RandomBeers';


export const HomePage = () => {
  return (
    <div>
    <Link to="/beers"><Beers/></Link>
    <Link to="/random-beer"><RandomBeers/></Link>
    <Link to="/new-beer" ><NewBeer/></Link>
    </div>
  )
}
