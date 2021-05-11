import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <div>
                <Link exact to="/beers">Beers</Link>
                <Link exact to="/random">Random beer</Link>
                <Link exact to="/new-beer">New beer</Link>
            </div>
        </div>
    );
}
