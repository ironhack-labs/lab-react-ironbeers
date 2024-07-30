import { Link } from "react-router-dom";
import beersImage from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import addBeer from '../assets/new-beer.png';

function HomePage() {


    return (
        <>
        <Link to="/beers">
            <div className="all-beers">
                <h1>All Beers</h1>
                <img src={beersImage} alt="beers image" />
            </div>
            <p>Here are all Beers!</p>
        </Link>
        <Link to="/random-beer">
            <div className="random-beer">
                <h1>Random Beer</h1>
                <img src={randomBeer} alt="beer image random" />
            </div>
            <p>Here's a random Beer!</p>
        </Link>
        <Link to="/add-beer">
            <div className="add-beer">
                <h1>Add Beer</h1>
                <img src={addBeer} alt="a new beer image" />
            </div>
            <p>Here's a new Beer!</p>
        </Link>
        </>

    )
}

export default HomePage;
