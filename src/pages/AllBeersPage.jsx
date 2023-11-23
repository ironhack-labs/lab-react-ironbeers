import axios from "axios"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseURL = "https://ih-beers-api2.herokuapp.com/beers"

function AllBeersPage() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => setBeers(response.data))
            .catch(err => console.log("THIS IS AN ERROR", err))
    }, [])

    return (

        <div className="beersPage">

            <h1>BEERS!!</h1>

            {
                beers.map(elm => {
                    return (
                        <div className="beersList">
                            <img src={elm.image_url} alt={elm.name} className="beersimg" />
                            <div className="beerDetails">
                                <Link to={`/${elm._id}`}><h3>{elm.name}</h3></Link>
                                <p><b>Tagline:</b> {elm.tagline}</p>
                                <p><b>Contributed by:</b> {elm.contributed_by}</p>
                            </div>
                        </div>

                    )
                })
            }

        </div>


    )
}

export default AllBeersPage;
