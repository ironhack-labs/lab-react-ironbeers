import { Link } from 'react-router-dom'
import beer from '../assets/beers.png'
import random from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'

function HomePage() {
    return (
        <>
        <div>
            <Link to={'/beers'}>
                <img src={beer}></img>
                <h2>All beers</h2>
            </Link>
        </div>
        <div>
            <Link to={'/random-beer'}>
                <img src={random}></img>
                <h2>Random beer</h2>
            </Link>
        </div>

        <div>
            <Link to={'/new-beer'}>
                <img src={newBeer}></img>
                <h2>New beer</h2>
            </Link>
        </div>
        </>
    )
}

export default HomePage;
