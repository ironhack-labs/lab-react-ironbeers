
import { Link } from "react-router-dom";
import beers from '../assets/beers.png';
import randomBeers from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';


function HomePage() {
    return (
        <>
            <br/>
            <h1>Discover...</h1>
            <br/>

            <h2>All beers</h2>
            <div>
                <Link to="/beers"> View all </Link>
            </div>
            <br/>
            <img src={beers} width="50%" />
            <br/>

            <h2>Random beers</h2>
            <div>
                <Link to="/random-beer"> View random </Link>
            </div>
            <br/>
            <img src={randomBeers} width="50%" />
            <br/>

            <h2>New beer</h2>
            <div>
                <Link to="/new-beer"> View newest </Link>
            </div>
            <br/>
            <img src={newBeer} width="50%" />
            <br/>

        </>
    )
}

export default HomePage;
