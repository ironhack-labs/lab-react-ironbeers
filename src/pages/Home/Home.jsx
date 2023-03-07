import React from 'react'
import { Link } from 'react-router-dom'
import allBeersImg from '../../assets/beers.png'
import randomBeerImg from '../../assets/random-beer.png'
import newBeerImg from '../../assets/new-beer.png'

function Home() {
    return (
        <div>

            <div className='homepage'>
                <img src={allBeersImg} alt="all beers" />
                <div className='home-text'>
                    <Link
                        className='link-all-beers'
                        to="/allbeers"
                        style={{ textDecoration: 'none' }}
                    >
                        All Beers
                    </Link>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam."
                    </p>
                </div>
            </div>

            <div className='homepage'>
                <img src={randomBeerImg} alt="random beer" />
                <div className='home-text'>
                    <Link
                        className='link-random-beer'
                        to="/randombeer"
                        style={{ textDecoration: 'none' }}
                    >
                        Random Beer
                    </Link>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam."
                    </p>
                </div>
            </div>

            <div className='homepage'>
                <img src={newBeerImg} alt="new beer" />
                <div className='home-text'>
                    <Link
                        className='link-new-beer'
                        to="/newbeer"
                        style={{ textDecoration: 'none' }}
                    >
                        New Beer
                    </Link>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam."
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Home