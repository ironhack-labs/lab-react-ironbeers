import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"


function Home() {
    return (
        <div>
            <div className="card">
            <img src="/Images/beers.jpeg" alt="beers"></img> 
            <h3><Link to='/allBeers'> All beers  </Link></h3>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
             nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
             aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
             nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
             officia deserunt mollit anim id est laborum."
             </p>
            </div>
            <hr></hr>

            <div className="card">
            <img src="/Images/randombeer.jpeg" alt="random beer"></img>
            <h3><Link to='/randomBeer'>Random Beer  </Link></h3>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
             mollit anim id est laborum."
             </p>
            </div>
            <hr></hr>


            <div className="card">
            <img src="/Images/newbeer.jpeg" alt="new beer"></img>
            <h3><Link to='/newBeer'> New Beer  </Link></h3>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum."
              </p>
            </div>
            <hr></hr>

            
        </div>
    )
}

export default Home
