import { useState, useEffect } from "react";   
import axios from "axios";     
import { Link } from "react-router-dom"; 

import Header from "../components/Header";

function Beers(){
    const [beers, setBeers] = useState([]);
    useEffect(() => {                              
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => {
            setBeers(response.data)
          });
        
      }, [] );

    return(
<div>
        <Header/>
        <h1>All Beers</h1>

{beers.map((beer) => (
  <div className="beerList">
   
    <img src={beer.image_url} alt="beerPic" />
    
    <Link to={`/beers/${beer._id}`} key={beer._id}> 
    <h2>{beer.name}</h2>
    </Link>
    
    <p>{beer.tagline}</p>
    <p>Created By: {beer.contributed_by}</p>
    
  </div>
))}

        
</div>
    )
}

export default Beers;