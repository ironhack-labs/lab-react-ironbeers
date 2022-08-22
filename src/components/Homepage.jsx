import React from 'react'
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import {Link} from 'react-router-dom';

function Homepage() {
    return (
    <nav>
    <h1>Homepage</h1>

    <Link to="/Beers"><img src={beers} alt="beers" /></Link>
    <h3 className=''>All Beers</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente blanditiis perspiciatis corrupti consequuntur repudiandae animi sit itaque ut pariatur quos quia possimus, consequatur, cumque nobis quisquam eum quibusdam repellendus.</p>
    <br />

    <Link to="/New-beer"><img src={newBeer} alt="beers"/></Link>
    <h3 className=''>Random Beer</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente blanditiis perspiciatis corrupti consequuntur repudiandae animi sit itaque ut pariatur quos quia possimus, consequatur, cumque nobis quisquam eum quibusdam repellendus.</p>
    <br />
    
    <Link to="/Random-beer"><img src={randomBeer} alt="beers"/></Link>
    <h3 className=''>New Beer</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente blanditiis perspiciatis corrupti consequuntur repudiandae animi sit itaque ut pariatur quos quia possimus, consequatur, cumque nobis quisquam eum quibusdam repellendus.</p>
    <br />
    </nav>
    
    )
}
      
    export default Homepage;