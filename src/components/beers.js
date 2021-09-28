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
            <div className="link-home-page">
                <Link to="/">Home Page</Link>
            </div>
            <h2>Beers</h2>
            {beers.map((beer) => (
                <div className="beer-card">         
                    <img src={beer.image_url}></img>
                    <div className="beer-card-info">   
                        <h6><Link to={`/beers/${beer._id}`}>{beer.name}</Link></h6>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                    </div>
                </div>

            ))}
        </div>
    );
    }
}

  
export default Beers