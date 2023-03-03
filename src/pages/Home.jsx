import React from 'react'
import {Link} from 'react-router-dom'
import beerListimg from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'


function Home() {
  return (
    <div>
        <Link to="/beer-list">
            <img src={beerListimg} alt='AllBeersimg'/>
            <h1>All Beers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur
             adipisicing elit. Suscipit facilis quaerat, at dolore numquam 
             ipsam reiciendis harum magnam iste rerum maxime nemo velit ut repudiandae, laboriosam cumque, recusandae odio obcaecati.</p>
        </Link>
       
        <Link to="/random-beer">
            <img src={randomBeer} alt='RandomBeerimg'/>
            <h1>Random Beer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsa ad molestias deleniti! Eligendi, nesciunt, odit laudantium in, impedit culpa ipsa explicabo modi possimus necessitatibus voluptatibus mollitia soluta architecto facilis?</p>
        </Link>
        
        <Link to="/new-beer">
            <img src={newBeer} alt='NewBeerimg'/>
            <h1>New Beer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque rerum dolorum quia, amet dolores perferendis aliquam minus officia debitis necessitatibus, in mollitia rem alias dolorem magnam ducimus. Aliquid, alias?</p>
        </Link>
    </div>
  )
}

export default Home