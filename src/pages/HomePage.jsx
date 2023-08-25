import { Link } from "react-router-dom";
import beers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

function HomePage() {

    return (
        <section className="Navbar">
            <div>
            <img src={beers} alt="Beers Image"/>
            <Link to="/beers">
                <h2>All Beers</h2>
            </Link>
            </div>
            <img src={randomBeer} alt="Random Beers Image"/>
            <Link to="/random-beer">
                <h2>Random Beer</h2>
            </Link>

            <div>
            <img src={newBeer} alt="New Beers Image"/>
            <Link to="/new-beer">
                <h2>New Beer</h2>
            </Link>

            </div>
     
        </section>  
    )
}

export default HomePage;
