import React from 'react'
import { Link } from 'react-router-dom'
import beerImg from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'


function Home() {
  return (
    <div className='homePage'>

<div>
        <img  className='homeImg' src={beerImg} alt="beer-view" />
    <Link to='/beer'>
        <h1>All Beers</h1>
    </Link>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum totam quibusdam beatae, soluta ab ducimus adipisci ipsa? Nulla, minus non inventore excepturi autem minima amet harum similique tenetur, earum quisquam?</p>
</div>

<div>
        <img className='homeImg' src={randomBeer} alt="random-beer-view" />
    <Link to='/random-beer'>
        <h1>Random Beer</h1>
    </Link>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum totam quibusdam beatae, soluta ab ducimus adipisci ipsa? Nulla, minus non inventore excepturi autem minima amet harum similique tenetur, earum quisquam?</p>
</div>

<div>
        <img className='homeImg' src={newBeer} alt="new-beer-view" />
    <Link to='/new-beer'>
        <h1>New Beer</h1>
    </Link>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum totam quibusdam beatae, soluta ab ducimus adipisci ipsa? Nulla, minus non inventore excepturi autem minima amet harum similique tenetur, earum quisquam?</p>
    
</div>
    </div>
  )
}

export default Home