import { Link } from 'react-router-dom'
import Beers from "../assets/beers.png"
import RandomBeer from "../assets/random-beer.png"
import NewBeer from "../assets/new-beer.png"

function Home() {
    return (
        <div className="container">
            <img src={Beers} alt="beer" />
            <Link to="beers">All Beers </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam ductum arcu ut dignissim varius.</p>
            <img src={RandomBeer} alt="random beer" />
            <Link to="random-beer">Random Beer</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam ductum arcu ut dignissim varius.</p>
            <img src={NewBeer} alt="new beer" />
            <Link to="newBeer">New Beer</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam ductum arcu ut dignissim varius.</p>
        </div>
    )
}


export default Home