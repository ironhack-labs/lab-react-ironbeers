import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Beers from "../assets/beers.png";
import RandomBeer from "../assets/random-beer.png"
import NewBeer from "../assets/new-beer.png";

function HomePage() {
    return(
        <>
   <Link to="beers"><h1>All beers</h1>
   <img src={Beers} alt="Card cap" /></Link>
   <Link to="random-beer"><h1>Random Beer</h1>
   <img src={RandomBeer} alt="Card cap" />
   </Link>
   <Link to="new-beer"><h1>New Beer</h1>
   <img src={NewBeer} alt="Card cap" />
   </Link>
      </>
    )
}

export default HomePage