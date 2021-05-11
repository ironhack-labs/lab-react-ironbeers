import React from 'react';
import { Link, Switch } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <div>
            <Switch>
            <Link to="/beers">Beers</Link>
                <Link to="/random">Random beer</Link>
                <Link to="/new-beer">New beer</Link>
            </Switch>
                
            </div>
        </div>
    );
}
