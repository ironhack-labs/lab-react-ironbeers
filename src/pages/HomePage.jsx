import { Link } from "react-router-dom";
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

export function HomePages(){
    return(
        <>
            <div>
            <Link to="/beers">All Beers</Link>
            <img src={beers} alt="beers"  />
            </div>
            <div>
            <Link to="/random-beer">Random Beer</Link>
            <img src={randomBeer} alt="beers"  />
            </div>
            <div>
            <Link to="/new-beer">New Beer</Link>
            <img src={newBeer} alt="beers"  />
            </div>
        </>
    );
}