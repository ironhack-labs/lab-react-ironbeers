import React from 'react'
import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import createBeer from '../assets/new-beer.png'

const LandingPage = () => {
    return (
        <div className="landing-page">

            <Link to='/beers'>
                <div className='landing-card'>
                    <img src={beers} alt="beers" />
                    <h2>All beers</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, eos aspernatur perferendis qui quaerat voluptas.</p>
                </div>
            </Link>
            
            <Link to='/beer/random'>
                <div className='landing-card'>
                    <img src={randomBeer} alt="random-beers" />
                    <h2>Random beer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum totam rem dicta.</p>
                </div>
            </Link>
            
            <Link to='/beer/create'>
                <div className='landing-card'>
                    <img src={createBeer} alt="create-beers" />
                    <h2>Create a beer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, explicabo?</p>
                </div>
            </Link>
            
        </div>
    )
}

export default LandingPage
