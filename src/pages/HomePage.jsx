import { Link } from "react-router-dom"
import allBeersImage from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'

function HomePage() {
    return (
        <div>
            <Link to={'/beers'}>
                <img src={allBeersImage} alt="allBeers" />
                <p>All Beers</p>
            </Link>
            <Link to={'/random-beer'}>
                <img src={randomBeer} alt="randomBeer" />
                <p>Random Beer</p>
            </Link>
            <Link to={'/new-beer'}>
                <img src={newBeer} alt="newBeer" />
                <p>New Beer</p>
            </Link>
        </div>
    )
}

export default HomePage
