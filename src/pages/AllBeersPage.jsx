import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {
    const [ beers, setBeers ] = useState([]);
    
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) =>{
            setBeers(response.data)
        })
    }, []);

    return(
        <div>
            {beers.map((beer) =>{
                return(
                    <div key={beer._id}>
                        <img src={beer.image_url} alt="" />
                        <h1>{beer.name}</h1>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        <Link to={`/beers/${beer._id}`}>Beer Details</Link>
                    </div>
                )
            })}
        </div>
    );
}

export default AllBeersPage;
