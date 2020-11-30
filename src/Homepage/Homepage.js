import React from 'react';
import { Link } from "react-router-dom";
import "./Homepage.css"

function Homepage(){
    return(
        <div className="homepage">

            <div className="homecard">
                <img src="/images/Allbeers.jpg" alt="allbeers" />
                <h1><Link to= "/beers">All Beers</Link></h1>
                <p>See a beautiful list with all the beers</p>
            </div>
            <div className="homecard">
                <img src="/images/Randombeer.jpg" alt="randombeer" />
                <h1><Link to= "/random-beer">Random Beers</Link></h1>
                <p>Check out a random beer!</p>
            </div>
            <div className="homecard">
                <img src="/images/NewBeer.jpg" alt="newbeer" />
                <h1><Link to= "/new-beer">New Beer</Link></h1>
                <p>Add your favourite new beer</p>
            </div>
        </div>
    )
}

export default Homepage;