import { Link } from "react-router-dom";
import beerPng from "../assets/beers.png"
import newBeerPng from "../assets/new-beer.png"
import randomBeerPng from "../assets/random-beer.png"

function HomePage() {

    return (
        <section>
        <div>
            <div>
            <Link to={"/beers"}> <img src={beerPng}></img>
            <h1>All Beers</h1>
            </Link>
            </div>
            <div>
            <Link to={"/random-beer"}><img src={randomBeerPng}></img>
            <h1>Random Beer</h1>
            </Link>
            </div>
            <div>
            <Link to={"/new-beer"}> <img src={newBeerPng}></img>
            <h1>New Beer</h1>
            </Link>
            </div>
        </div>
        </section>
    )
}

export default HomePage;
