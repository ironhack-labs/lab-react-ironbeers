import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <div>
                <NavLink exact to="/beers">Beers</NavLink>
                <NavLink exact to="/random">Random beer</NavLink>
                <NavLink exact to="/new-beer">New beer</NavLink>
            </div>
        </div>
    );
}
