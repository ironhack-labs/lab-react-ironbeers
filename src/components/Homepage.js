import React from 'react';
import {Link} from 'react-router-dom';

import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png';

export default function Homepage(props){
  return(
    <div className= "homepage">
      <h1>Ironbeers</h1>
      <Link to="/beers">
        <div>
          <img src={beers} alt=""/>
          <h2>All Beers</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in varius lectus. Nulla pellentesque euismod augue, id eleifend sapien faucibus quis. Sed volutpat, metus a rutrum suscipit, ex lacus venenatis neque, eget tincidunt ex purus a ipsum. 
          </p>
        </div>
      </Link>

      <Link to="/random-beer">
        <div>
          <img src={randomBeer} alt=""/>
          <h2>Random Beers</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in varius lectus. Nulla pellentesque euismod augue, id eleifend sapien faucibus quis. Sed volutpat, metus a rutrum suscipit, ex lacus venenatis neque, eget tincidunt ex purus a ipsum. 
          </p>
        </div>
      </Link>

      <Link to="/new-beer">
        <div>
          <img src={newBeer} alt=""/>
          <h2>New Beers</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in varius lectus. Nulla pellentesque euismod augue, id eleifend sapien faucibus quis. Sed volutpat, metus a rutrum suscipit, ex lacus venenatis neque, eget tincidunt ex purus a ipsum. 
          </p>
        </div>
      </Link>
    </div>
  )
}