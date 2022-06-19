import beers from '../assets/beers.png'
import random from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import { Link } from 'react-router-dom'

function Home () {
    return <div>
        <div>
            <img src={beers} alt='All beers' />
            <Link to='/beers'><h2>All beers</h2></Link>
        </div>
        <div>
            <img src={random} alt='Random b' />
            <Link to='/random'><h2>Random beer</h2></Link>
        </div>
        <div>
            <img src={newBeer} alt='Create' />
            <Link to='/create'><h2>Create new beer</h2></Link>
        </div>
    </div>
}

export default Home