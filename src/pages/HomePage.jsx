import { Link } from "react-router-dom";

import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'


function HomePage() {

    return (
        <>
            <div className="beers-div">
                <img src={beers} alt="" srcset="" />
                <Link to="/beers">
                    <h1>All Beers</h1>
                </Link>
                <p>Some random text</p>
            </div>
            <div className="beers-div">
                <img src={randomBeer} alt="" srcset="" />
                <Link to="/random-beer">
                    <h1>Random Beer</h1>
                </Link>
                <p>Some random text</p>
            </div>
            <div className="beers-div">
                <img src={newBeer} alt="" srcset="" />
                <Link to="/new-beer">
                    <h1>New Beer</h1>
                </Link>
                <p>Some random text</p>
            </div>
        </>
    )
}

export default HomePage;
