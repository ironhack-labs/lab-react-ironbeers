import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers"


function AllBeersPage() {
    
    let beerId = useParams();
    
    const [beers, setBeers] = useState([]);

    useEffect(()=>{
        axios.get(API_URL).then((response)=>{
            setBeers(response.data);
            console.log("TEST");
        })
        .catch((error)=> console.log(error))
    }, [])

    return(
    <div>
        {beers.map((beer)=>{
            return(
                <div key={beer._id} className="beer-map"> 
                    <div>
                    <img src={beer.image_url}/>
                    </div>
                    <div>
                    <Link to={`/beers/${beer._id}`}> <h2>{beer.name}</h2></Link>
                    <h4>{beer.tagline}</h4>
                    <p>Contributed by: {beer.contributed_by}</p>
                    </div>
                </div>
            )
        })}

        
        <Link to="/" className="back-button"> Back </Link>
    </div>
    )

}

export default AllBeersPage;
