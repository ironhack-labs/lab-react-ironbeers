import '../App.css'
import beers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"

import { Link } from 'react-router-dom'

function HomePage () {
    return (
        <div className="homepage">
        <Link to='./beers'>
            <img src={beers} alt="beers"/>
        </Link>
            <h1>All Beers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a finibus diam. Donec consequat, mi sed venenatis ultricies, urna erat luctus orci, eget blandit elit elit vel metus.</p>

        <Link to='./random-beer'>
            <img src={randomBeer} alt="random-beers"/>
            <h1>Random Beers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a finibus diam. Donec consequat, mi sed venenatis ultricies, urna erat luctus orci, eget blandit elit elit vel metus.</p>
        </Link>
            
        <Link to='./new-beer'>
            <img src={newBeer} alt="new-beer"/>
            <h1>New Beer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a finibus diam. Donec consequat, mi sed venenatis ultricies, urna erat luctus orci, eget blandit elit elit vel metus.</p>
        </Link>
        </div>
        
    )
}
export default HomePage;