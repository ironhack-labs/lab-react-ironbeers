import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <div>
                <Link to="/beers">Beers</Link>
                <Link to="/random">Random beer</Link>
                <Link to="/new-beer">New beer</Link>
            </div>
        </div>
    );
}
