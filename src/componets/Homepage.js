import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from "../assets/beers.png"
import logo2 from "../assets/random-beer.png"
import logo3 from "../assets/new-beer.png"
import "./Homepage.css"


export default function Homepage() {
  return (
    <div>
    
      <div className='Box'>
      <img src={logo1} alt="Logo" /><br />
      <h1><Link  to="/beers">All Beers</Link> </h1>
      </div><br />
      <div className='Box'>
      <img src={logo2} alt="Logo" /><br />
      <h1><Link to="/beers/random">Randome Beer</Link> </h1>
      </div><br />
      <div className='Box'>
      <img src={logo3} alt="Logo" /><br />
      <h1><Link to="/beers/create">New Beer</Link> </h1>
      </div><br />
      
    

    </div>
  )
}
