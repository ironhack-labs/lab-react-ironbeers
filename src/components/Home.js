import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import RandomBeer from '../assets/random-beer.png'

export default function Home() {
    return(
        <div>
            <header className="App-header">
        <img src={beers} alt="beers" />
        <Link to={`/beers`}>
            <h1>All Beers</h1>
        </Link>
        <br />
        
        <img src={RandomBeer} alt="Random beer" />
        <Link to={'/random-beer'}>
            <h1>Random Beer</h1>
        </Link>
        <br />
        
        <img src={newBeer}alt="New beer" />
        <Link to={'/new-beer'}>
            <h1>New Beers</h1>
        </Link>
        <br />
        
      </header>
        </div>
    )
}