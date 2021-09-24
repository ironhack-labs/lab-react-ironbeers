import { Switch, Route, Link, Router } from "react-router-dom"
import React from 'react';
import Beers from "./beers"

function HomePage() {

    return(
    
    <div className="HomePage">
        <h2>Home Page</h2>
        <ul>
            <li><Link to="/beers">Beers</Link></li>
            <li><Link to="/random">Random Beer</Link></li>
            <li><Link to="/new">New Beer</Link></li>
        </ul>
    </div>
    )
}

export default HomePage