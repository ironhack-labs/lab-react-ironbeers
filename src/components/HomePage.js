import React from 'react'
import beers from "../assets/beers.png";
import onebeer from "../assets/random-beer.png";
import createbeer from "../assets/new-beer.png";
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <div>
      <div>
     <h3>All beers</h3>
     <Link to="/beers">
     <img src={beers}/>
     </Link>
     
      </div>
      <div>
        <h3>Random beer</h3>
        <Link to="/random-beer">
        <img src={onebeer}/>
        </Link>
       
      </div>
      <div>
        <h3>New beer</h3>
        <Link to="/new-beer">
        <img src={createbeer}/>
        </Link>
        
      </div>
    </div>
  )
}
