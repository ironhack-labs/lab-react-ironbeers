import { Link } from "react-router-dom";

import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'


function HomePage() {

    return (
        <>
            <div className="homepage-beers-div">
                <img src={beers} alt="Beers image" />
                <Link to="/beers">
                    <h1>All Beers</h1>
                </Link>
                <p>Welcome, friend. Can I show ya my wares? Got the best beers anywhere!</p>
            </div>
            <div className="homepage-beers-div">
                <img src={randomBeer} alt="Random beer image" />
                <Link to="/random-beer">
                    <h1>Random Beer</h1>
                </Link>
                <p>Shoot your shot, you might get lucky!</p>
            </div>
            <div className="homepage-beers-div">
                <img src={newBeer} alt="New beer image" />
                <Link to="/new-beer">
                    <h1>New Beer</h1>
                </Link>
                <p>Don't try anything stupid.</p>
            </div>
        </>
    )
}

export default HomePage;
