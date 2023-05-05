import { Link } from "react-router-dom"
import Beers from "../assets/beers.png"
import NewBeer from "../assets/new-beer.png"
import RandomBeer from "../assets/random-beer.png"


function HomePage() {
    return (
        <div>
            <Link to="/beers">
                <img src={Beers} alt="Beers"/>
                <h3>All Beers</h3>
            </Link>
            <Link to="/random-beer">
                <img src={RandomBeer} alt="New beer"/>
                <h3>Random Beer</h3>
            </Link>

            <Link to="new-beer">
                <img src={NewBeer} alt="Random beer"/>
                <h3>New Beer</h3>
            </Link>
        </div>
    )
}

export default HomePage