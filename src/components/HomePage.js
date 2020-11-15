import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {

    return (
        <div className="HomePage">
            <div>
                <Link to="/Beers">
                <img src="./images/allbeers.JPG" alt="beerImage" />
                <h1>All Beers</h1></Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
        </p>
            </div>
            <div>
                <Link to="/RandomBeer">
                <img src="./images/random.JPG" alt="beerImage" />
                <h1>Random Beer</h1></Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
        </p>
            </div>
            <div>
                <Link to="/NewBeer">
                <img src="./images/addbeer.png" alt="beerImage" />
                <h1>Add a New Beer</h1></Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
        </p>
            </div>
        </div>
    );
}



export default HomePage;