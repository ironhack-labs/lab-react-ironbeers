
import { Link } from 'react-router-dom';

import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png'

function HomePage () {
    return (
        <div>
            <div>
                <Link to='/beers' >
                    <img src={beers} alt="all beers"></img>
                    <h2>All Beers</h2>
                </Link>
            </div>
            <div>
                <Link to='/random-beer' >
                    <img src={randomBeer} alt="random beer"></img>
                    <h2>Random Beer</h2>
                </Link>
            </div>
            <div>
                <Link to='/new-beer' >
                    <img src={newBeer} alt="new beer"></img>
                    <h2>New Beer</h2>
                </Link>
            </div>
        </div>
    )


}

export default HomePage;