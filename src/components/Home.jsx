import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Link to="/beers">Beers</Link> <br />
            <Link to="/random-beer">Random beer</Link> <br />
            <Link to="/new-beer">New Beer</Link> <br /><br />
        </div>
    )
}
