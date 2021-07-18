import React from 'react'
import allBeersPic from '../assets/beers.png'
import randomBeerPic from '../assets/random-beer.png'
import newBeerPic from '../assets/new-beer.png'
import { Link } from 'react-router-dom'
//do NOT import HEADER here



 function Home() {        //hierdrin Wiederholungen vermeiden?
    return (
        <div>
           
           <Link to = "/beers">
             <img src= {allBeersPic} alt="a bar with beers"></img>            
             <h2>All Beers</h2>
             <section>Check out our menu.</section>   </Link>


           <Link to = "/random-beer">
             <img src= {randomBeerPic} alt= "beer tap"></img>
             <h2>Random Beer</h2>
             <section>Check out the random beer of the day!</section> </Link>

           <Link to = "/new-beer">
             <img src= {newBeerPic}  alt= "beer glass"></img>
             <h2>New Beer</h2> </Link>
             <section>Add a new beer here.</section>  
           
           
           
        </div>
    )
}



export default Home; 
