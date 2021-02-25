import { Route, Link} from 'react-router-dom'
import React from 'react'
import beers from './assets/beers.png';
import randomBeer from './assets/random-beer.png';
import newBeer from './assets/new-beer.png';
import 'bootstrap/dist/css/bootstrap.min.css'


const Home = () => {
    return(
        <div className="container">
        <Route>
            <Link to='/beers'>
            <img src={beers} alt="beers"></img>
            <h3>All Beers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies arcu sodales porttitor maximus. Integer venenatis facilisis fringilla.</p>
            </Link>
            </Route>
            <Route>
            <Link to='/random-beer'>
            <img src={randomBeer} alt="random-beer"></img>
            <h3>Random Beer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies arcu sodales porttitor maximus. Integer venenatis facilisis fringilla.</p>
            </Link>
            </Route>
            <Route>
            <Link to='/new-beer'>
            <img src={newBeer} alt="new-beer"></img>
            <h3>New Beer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies arcu sodales porttitor maximus. Integer venenatis facilisis fringilla.</p>
            </Link>
            </Route>

        </div>

    )
}
export default Home