import { Link } from "react-router-dom";
import beers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

function HomePage() {

    return (
        <section className="Navbar">
            <Link to="/beers">
                <img src={beers} alt="Beers Image"></img>
            </Link>
            <p></p>
            <Link to="/random-beer">
            <img src={randomBeer} alt="Random Beers Image"></img>
            </Link>
            <p></p>
            <Link to="/new-beer">
            <img src={newBeer} alt="New Beers Image"></img>
            </Link>
        </section>  
    )
}

export default HomePage;
