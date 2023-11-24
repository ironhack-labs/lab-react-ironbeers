import React from "react";
import { Link } from "react-router-dom";


function HomePage() {


    return (
        <div>
            <h1>Home</h1>

            <Link to={'/beers'}>AllBeers</Link>
            <Link to={'/random-beer'}> Random Beers</Link>
            <Link to={'/:beer_id'}> New beer</Link>

        </div>)

}


export default HomePage;


