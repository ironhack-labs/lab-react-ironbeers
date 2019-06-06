import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>

            <figure>
                <img src='/img/beers.png' alt="beers" />
                <Link to='/beers'><h1>All Beers</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </figure>
            <figure>
                <img src="/img/random-beer.png" alt="random beer" />
                <Link to='/beers/random'><h1>Random Beers</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </figure>
            <figure>
                <img src="../img/new-beer.png" alt="new beer" />
                <Link to='/addbeer'><h1>New Beers</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </figure>
        </div>
    )
}


export default Home
