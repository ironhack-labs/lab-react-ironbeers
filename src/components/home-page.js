import { Switch, Route, Link, Router } from "react-router-dom"
import React from 'react';
import Beers from "./beers"

function HomePage() {

    return(
    
    <div className="HomePage">
        <h2>Home Page</h2>
            <div><Link to="/beers">All Beers</Link></div>
            <div><Link to="/random">Random Beer</Link></div>
            <div><Link to="/new">New Beer</Link></div>
    </div>
    )
}

export default HomePage