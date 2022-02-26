import React from 'react'
import { Link } from 'react-router-dom'
export default function Homepage() {
  return (
    <div>
    
      <Link to="/beers">All Beers</Link> <br />
      <Link to="/beers/random">Randome Beer</Link> <br />
      <Link to="/beers/create">New Beer</Link> <br />
      
    

    </div>
  )
}
