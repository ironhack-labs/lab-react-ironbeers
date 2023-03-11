import BeersImg from '../assets/beers.png'
import RandomBeerImg from '../assets/random-beer.png';
import NewBeerImg from '../assets/new-beer.png'
import React from "react";
import { Link } from 'react-router-dom'


function Homepage() {
    return(
        <div>
            <div> 
                <Link to="/beers">
                    <img src={BeersImg} alt="allbeer" />
                    <h1>All beers</h1>
                </Link>
                <p>
                    Duis imperdiet ligula quis mi sollicitudin, 
                    sed lacinia erat hendrerit. Donec pretium magna et 
                    odio dignissim pellentesque. Suspendisse potenti. 
                    Aenean sit amet semper felis.
                </p>
            </div>

            <div>
                
                <Link to="/randomBeer">
                    <img src={RandomBeerImg} alt="randombeer" />
                    <h1>Random Beer</h1>
                </Link>
                <p>
                    Duis imperdiet ligula quis mi sollicitudin, 
                    sed lacinia erat hendrerit. Donec pretium magna et 
                    odio dignissim pellentesque. Suspendisse potenti. 
                    Aenean sit amet semper felis.
                </p>
            </div>

            <div>
                
                <Link to="/newBeer">
                    <img src={NewBeerImg} alt="newbeer" />
                    <h1>New Beer</h1>
                </Link>
                <p>
                    Duis imperdiet ligula quis mi sollicitudin, 
                    sed lacinia erat hendrerit. Donec pretium magna et 
                    odio dignissim pellentesque. Suspendisse potenti. 
                    Aenean sit amet semper felis.
                </p>
            </div>
        </div>
    )
}

export default Homepage;