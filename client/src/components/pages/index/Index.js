import React from 'react'
import { Link } from 'react-router-dom'


export default () => {
    return (
        <>
            <h1>IronBeers</h1>
            <Link to="/beers">All</Link>
            <Link to="/random-beer">Random</Link>
            <Link to="/new-beer">New</Link>
        </>
    )
}