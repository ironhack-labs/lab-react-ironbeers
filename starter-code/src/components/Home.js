import React, { Component } from 'react';
//import beers from '../../img/beers.png';
//import newBeer from '../../img/new-beer.png';
//import randomBeer from '../../img/random-beer.png';
import {Link } from 'react-router-dom'
 import axios from 'axios';
 import beers from '../public/img/beers.png'
 import NewBeer from '../public/img/new-beer.png'
 import RandomBeer from '../public/img/random-beer.png'


class Home extends Component {
    
  render() {
    return(
      <div>
       
          <div>
          <img src={beers} />
            <Link to='/beers'>
            <h2>All Beers</h2>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse faucibus turpis in nunc aliquet, eget sodales diam pretium. 
              Nullam ac sagittis urna. In dolor massa, accumsan ac orci vitae, 
              convallis dictum enim. Ut id eleifend orci. Nullam venenatis euismod 
              felis sed luctus. In sollicitudin malesuada posuere. Donec ultrices 
              sodales dolor, sed vulputate tellus sodales id. In sagittis ante ut 
              dapibus rutrum.</p>
          </div>
       
       
        <div>
        <img src={NewBeer} />
        <Link to='/randombeer'>
          <h2>Random Beer</h2>
          </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean hendrerit facilisis orci a sollicitudin. Praesent vitae pretium ante, 
            non lacinia est. Nullam mollis vel urna ac vestibulum. Morbi molestie 
            lectus augue, eu posuere diam ultrices a. Nam rutrum porttitor posuere. 
            Sed a sodales purus, et maximus arcu. Curabitur egestas justo non mauris finibus, 
            sed pulvinar nisl egestas. Etiam tempor nisi nec justo ultricies, nec mattis enim 
            blandit. Pellentesque eleifend, ligula ac laoreet maximus, leo ex venenatis elit, 
            vel tempor metus lectus non tellus. Donec consequat, diam vel efficitur tristique, 
            massa mauris porta erat, vel iaculis neque nisl quis lacus. Pellentesque interdum, 
            felis ac commodo lacinia, nisi ante pellentesque libero, ac elementum lectus augue id urna.

</p>
        </div>
        
        <div>
        <img src={RandomBeer} />
        <Link to='/newbeer'>
          <h2>New Beer</h2>
          </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, 
            elit eget ullamcorper efficitur, lacus massa pellentesque tellus, 
            vel sollicitudin dui est rutrum augue. Pellentesque id mi ac enim 
            pretium consequat. Suspendisse interdum urna at leo suscipit venenatis. 
            Nullam tempor pretium leo id iaculis. Nulla facilisi. Curabitur sit amet 
            erat lacinia, faucibus ligula et, condimentum mauris. Sed placerat ante 
            eget odio tincidunt, sed dignissim risus venenatis.</p>
        </div>
      </div>
    )
  }
}

export default Home; 