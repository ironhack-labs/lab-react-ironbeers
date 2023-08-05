import { Link } from "react-router-dom";
import beers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"

const HomePage = () => {
    return (
            <>
                <img src={beers} alt="Beers"></img>
                <Link to="/beers"><h2>All Beers</h2></Link>
                <img src={newBeer} alt="Random Beer"></img>
                <Link to="/random-beer"><h2>Random Beer</h2></Link>
                <img src={randomBeer} alt="New Beer"></img>
                <Link to="/new-beer"><h2>New Beer</h2></Link>
            </>
   
    )
}

export default HomePage;