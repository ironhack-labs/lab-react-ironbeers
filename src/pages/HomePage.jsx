import { Link } from "react-router-dom";
import AllBeersPage from "./AllBeersPage";
import React from "react";


function HomePage() {

    return(
        <div>
            <Link to="/beers">All Beers</Link>
            <Link to="/random-beer">Random Beer</Link>
            <Link to="/new-beer">New Beer</Link>
        </div>
    )
}

export default HomePage;
