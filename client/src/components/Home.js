import React from 'react'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <ul>
        <li><Link to={`/beers`}>BEERS</Link></li>
        <li><Link to={`/random-beer`}>RANDOM BEER</Link></li>
        <li><Link to={`/new-beer`}>NEW BEER</Link></li>
    </ul>
  )
}
