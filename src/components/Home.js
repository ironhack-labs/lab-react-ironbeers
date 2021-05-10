import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/beers">Beers</Link>
                </li>
                <li>
                    <Link to="/new-beer">New Beer</Link>
                </li>
                <li>
                    <Link to="/random-beer">Random Beer</Link>
                </li>
            </ul>
        </div>
    )
}


// export default Home;