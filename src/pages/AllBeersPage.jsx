import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
    const [beers, setBeers] = useState([]);
   
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => {
                setBeers(response.data)
            });   
    }, []);

    return(
        <div className="container" style={{width: "50vw"}}>
            {beers.map((beer) => {
                return(
                    <div className="beer-card" key={beer._id}>
                        <Link to={`/beers/:beerId`}  style={{color:"black"}}>
                            <img src={beer.image_url} />
                            <aside style={{float: "right"}}>
                                <h3>{beer.name}</h3>
                                <p>{beer.tagline}</p>
                                <p>{beer.contributed_by}</p>
                            </aside>
                        </Link>
                        <br />

                    </div>
                )
            })

            }

        </div>

    )
}

export default AllBeersPage;
