import React from 'react'
import { Link }  from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Link to="/beers">All Beers</Link>
            <Link to="/random-beer">Random Beer</Link>
            <Link to="/new-beer">New Beer</Link>
        </div>
    )
}
