import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AllBeersPage from "./AllBeersPage";
import AddBeerPage from "./AddBeerPage";
import RandomBeersPage from "./RandomBeerPage";

function HomePage() {
    return (
        <div>
            <Link to="/beers">All Beers</Link>
            <Link to="/random-beer">Random beer</Link>
            <Link to="/new-beer">New Beer</Link>
        </div>
    )
}

export default HomePage;
