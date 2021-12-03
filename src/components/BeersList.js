import React, {useEffect, useState} from 'react';
import axios from "axios"
import {Link} from "react-router-dom";

export const BeersList = () => {
    const [beers, setBeers] = useState(null)

    useEffect(() => {

        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => setBeers(response.data))
            .catch(err => console.log(err))

    }, []);


    if (!beers) return <></>
    console.log(beers)
    return (
        <>
            {
                beers.map(beer => {
                    return <div key={beer._id} className="beer">
                        <Link to={`/beers/${beer._id}`}>
                            <img style={{height: "8rem"}} src={beer.image_url} alt={beer.name}/>
                            <h1>{beer.name}</h1>
                            <p>{beer.tagline}</p>
                            <h5><strong>Created by:</strong> {beer.contributed_by}</h5>
                        </Link>
                    </div>
                })
            }
        </>
    )
        ;
}