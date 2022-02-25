
//HomePage.js

import { Link } from 'react-router-dom';
import pathToBeersImage from '../assets/beers.png';
import pathToNewBeerImage from '../assets/new-beer.png';
import pathToRandomBeerImage from '../assets/random-beer.png';

function HomePage() {

    const sampleText = "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. "

    return (
        <div className="Homepage">
            <h1>Home</h1>
            <Link to="/pages/ListBeers" style={{textDecoration: 'none'}}>
                <div className="HomeContainer">
                    <img src={pathToBeersImage} alt="beers"/>
                    <h3>All beers</h3>
                    <p>{sampleText}</p>
                </div>
            </Link>
            <Link to="/pages/RandomBeer" style={{textDecoration: 'none'}}>
                <div className="HomeContainer">
                    <img src={pathToRandomBeerImage} alt="random-beer"/>
                    <h3>Random beer</h3>
                    <p>{sampleText}</p>
                </div>
            </Link>
            <Link to="/pages/NewBeer" style={{textDecoration: 'none'}}>
                <div className="HomeContainer">
                    <img src={pathToNewBeerImage} alt="new-beer"/>
                    <h3>New beer</h3>
                    <p>{sampleText}</p>
                </div>
            </Link>
        </div>
    );
}

export default HomePage;