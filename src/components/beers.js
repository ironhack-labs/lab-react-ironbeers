import React from 'react';
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import axios from "axios"


function Beers() {

const [beers, setBeers] = useState([]);
const[fetching, setFetching] = useState(true); 


useEffect(() => {                                        
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data);
        setFetching(false); 
      });  
  }, [] ); 


  
 if (fetching) {  
    return (<p>Loading...</p>)
    }

 else {
    return (
        <div>
            <Link to="/">Home Page</Link>
            <h2>Beers</h2>
            {beers.map((beer) => (
                <div>         
                   <h6><Link to={`/beers/${beer._id}`}>{beer.name}</Link></h6>    
                   <img src={beer.image_url}></img>
                   <p>{beer.tagline}</p>
                   <p>{beer.contributed_by}</p>
                </div>

            ))}
        </div>
    );
    }
}

  
export default Beers