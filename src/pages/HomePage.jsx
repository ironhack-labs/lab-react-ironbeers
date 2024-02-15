import { Link } from "react-router-dom";
import beersImage from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import addBeer from "../assets/new-beer.png";

const HomePage = () => {
    return (
        <>
       <Link to="/allBeers">
        <div>
            <h2>See all beers</h2> 
            <img src={beersImage} alt="beers" />
            <p>Check out all the beers we have in our database</p>
        </div>
        </Link>
        <Link to="/randomBeer">
        <div>
            <h2>Get a random beer</h2>
            <img src={randomBeer} alt="random beer" />
            <p>Feeling lucky? Get a random beer from our database</p>
        </div>
        </Link>
        <Link to="/addBeer">
        <div>
            <h2>Add a beer</h2>
            <img src={addBeer} alt="beers" />
            <p>Do you have a new beer to add to our database?</p>
        </div>
        </Link>
        </>
    );
};

export default HomePage;
