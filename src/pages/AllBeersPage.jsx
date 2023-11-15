import axios from "axios";
import { useEffect, useState } from "react";

import "../App.css"
import { Link } from "react-router-dom";

function AllBeersPage() {
    
    const [allBeers, setAllBeers] = useState([])
    
    const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

    useEffect(() => {
        axios.get(API_URL)
        .then((response) => {
            setAllBeers(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    
    return (
        <div>
            {allBeers.map((beer, i) => {
                return (
                    <div key={i}>
                        <img src={beer.image_url} alt={`${beer.name} beer image`} className="beer-img" />
                        <Link to={`/beers/${beer._id}`}> <h2>{beer.name}</h2> </Link>
                        <h3>{beer.tagline}</h3>
                        <p>{beer.contributed_by}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeersPage;
