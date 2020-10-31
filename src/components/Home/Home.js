import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div>
                <Link to="/beers">
                <h1>All beers</h1>
                </Link>
                <p>Description</p>
            </div>
            <div>
                <Link to="/random-beer">
                <h1>Random beer</h1>
                </Link>
                <p>Description</p>
            </div>
            <div>
                <Link to="/new-beer">
                <h1>New beer</h1>
                </Link>
                <p>Description</p>
            </div>
        </div>
    )
}
