import Header from "../Header"
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom"



function Beers(){
    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            setBeers(response.data)
        })
    }, [])
  
  
  
    return(
        <>
            <Header />
            {beers?.map(beer => (
              <NavLink to={`/beers/${beer._id}`}>
                <div className="beerElement">
                    <img src={beer.image_url} alt="beerimg" />
                    <div>
                        <h1>{beer.name}</h1>
                        <p>{beer.tagline}</p>
                        <p>Created by: {(beer.contributed_by)?.slice(0,9)}</p>
                    </div>
                </div>
              </NavLink>
 
            ))}
        </>
    )
}

export default Beers