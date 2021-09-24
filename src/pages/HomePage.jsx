import { Link } from "react-router-dom";
import React from 'react';
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'

function HomePage() {
  return (
    <div>
    <div>
        <img src={beers} alt='All Beers'/>
        <Link to='/beers'>All Beers</Link>
        <p>Laborum, veniam. Mollitia, facere molestiae!</p>
    </div>
    <div>
        <img src={randomBeer} alt='Random Beer'/>
        <Link to='/random-beer'>Random Beer</Link>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
    </div>
        <div>
        <img src={newBeer} alt='New Beer'/>
        <Link to='/new-beer'>New Beer</Link>
        <p>Consequuntur minus itaque corporis, nihil corrupti quam nesciunt mollitia, recusandae quis quo ea fugiat sed obcaecati non. </p>
    </div>
    </div>
  )
}


export default HomePage;

