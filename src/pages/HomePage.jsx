import { Link } from "react-router-dom";
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import { loremIpsum } from "../utils/constants";

function HomePage () {
    return (
        <div>
            <Link to="/beers" style={{textDecoration:'none', color: "black"}}>
                <img src={beers} alt="beers" />
                <h3>All beers</h3>
                <p>{loremIpsum}</p>
            </Link>

            <Link to="/random-beer" style={{textDecoration:'none', color: "black"}}>
                <img src={randomBeer} alt="Random beer" />
                <h3>Random beer</h3>
                <p>{loremIpsum}</p>
            </Link>

            <Link to="/new-beer" style={{textDecoration:'none', color: "black"}}>
                <img src={newBeer} alt="new beer" />
                <h3>New Beer</h3>
                <p>{loremIpsum}</p>
            </Link>
        </div>
    )
}

export default HomePage;