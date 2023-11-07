import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL= "https://ih-beers-api2.herokuapp.com/beers"

function AllBeersPage() {
    const [beers, setBeers] = useState("")

    useEffect(() => {
        axios.get(API_URL).then((response) => {
          console.log(response.data);
          setBeers(response.data);
        });
      }, []);
    return(
        <div>
            {beers && beers.map((beer)=>{
                return(
                    <Link to={`/beers/${beer._id}`}>
                    <div>
                        <img src={beer.image_url} alt="" />
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <p>Created by: {beer.contributed_by}</p>
                    </div>
                    </Link>
                    
                )
            })}
        </div>
    )
}

export default AllBeersPage;
