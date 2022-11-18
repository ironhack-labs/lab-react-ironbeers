import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png'
import {Link} from 'react-router-dom';

import React from 'react'

function Homepage() {
  return (
    <div>
    <img src={beers} alt="beers" />
    <Link to={`/beers`}>All beers</Link>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat voluptatem libero dolorem sint maiores porro nostrum voluptates explicabo ipsum architecto unde, quaerat, quisquam aspernatur dignissimos dolor? Alias, dolorum magnam.</p>


    <img src={randomBeer} alt="" />
    <Link to={`/randomBeer`}>Random Beer</Link>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam earum cumque quasi tenetur hic impedit id accusamus nobis at doloribus nisi dolor, quas aliquam commodi quod ut cum enim perspiciatis.</p>


    <img src={newBeer} alt="" />
    <Link to="/newBeer" >New Beer</Link>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, dicta inventore? Inventore, deleniti? Voluptatum excepturi nisi, reprehenderit cum itaque odit, neque ea ipsa provident quam eveniet eius vitae rem! Cum?</p>


    </div>
  )
}

export default Homepage

