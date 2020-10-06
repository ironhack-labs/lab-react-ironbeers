import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1><Link to="/beers">Beers</Link></h1> 
            <h1><Link to="/beers-random">Random Beers</Link></h1>
            <h1><Link to="/new-beer">New Beers</Link></h1>
        </div>
    )
}
