import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container">
            <div>
                <Link to="/beers" >
                    <h3>All Beers</h3>
                </Link>
            </div>

            <div>
                <Link to="/random-beer" >
                    <h3>Random Beer</h3>
                </Link>
            </div>

            <div>
                <Link to="/new-beer" >
                    <h3>New Beer</h3>
                </Link>
            </div>
        </div>
    )
}
