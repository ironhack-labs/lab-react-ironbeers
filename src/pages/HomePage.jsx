import allBeers from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <div>
                <img src={allBeers}></img>
                <Link to={`/beers`}><h1>All Beers</h1></Link>
            </div>
            <div>
                <img src={randomBeer}></img>
                <Link to={`/random-beer`}><h1>Random Beer</h1></Link>
            </div>
            <div>
                <img src={newBeer}></img>
                <Link to={`/new-beer`}><h1>New Beer</h1></Link>
            </div>
        </div>
    )
}

export default HomePage;
