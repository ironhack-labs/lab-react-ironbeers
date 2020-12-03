import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


function Home() {
        return (
        <>
        <div>
       
 <h1>Bienvenido</h1>
    
        <div>
        <img src='/images/img1.jpg' alt='All Beers'/>
        <Link to="/BeerList"><h2>All Beers</h2></Link>
        </div>
          <div> 
        <img src='/images/img2.jpg' alt='Random Beer'/>
        <Link to="/random-beer"><h2>Random Beer</h2></Link>
        </div> 
        <div>
        <img src='/images/img3.jpg' alt='Add a beer'/>
        <Link to="/NewBeer"><h2>New Beer</h2></Link>
        </div>

                </div>
            </>    
    ) 
}

export default Home 