import React from 'react'
import beersImg from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>

    <div>
    <img src={beersImg} alt="beer" />
    <Link to="/beers" ><h2>All Beers</h2></Link>   
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora id et? Cum officia quaerat veniam atque ducimus
     accusamus nesciunt at ad nisi facere architecto, quasi deserunt dicta incidunt voluptas.</h5>
    </div>


    <div>
    <img src={randomBeer} alt="random beer" />
    <Link to="/random-beer" ><h2>Random Beer</h2></Link>  
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora id et? Cum officia quaerat veniam atque ducimus
     accusamus nesciunt at ad nisi facere architecto, quasi deserunt dicta incidunt voluptas.</h5>
    </div>

    <div>
    <img src={newBeer} alt="new beer" />
    <Link to="/new-beer" ><h2>New Beer</h2></Link>   
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora id et? Cum officia quaerat veniam atque ducimus
     accusamus nesciunt at ad nisi facere architecto, quasi deserunt dicta incidunt voluptas.</h5>
    </div>

    </div>

  )
}

export default Home