import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function AllBeersPage() {
    const [beers, setBeers] = useState(null)

    const getBeers = async () => {
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            setBeers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeers()
    }, [])

    if (!beers) {
        return <p>Loading...</p>
    }

    return (
        <div>
            {beers.map(beer => (
                <div className="each-beer" key={beer._id}>
                    <Link to={`/beers/${beer._id}`}>
                        <img className="beer-image" src={beer.image_url} alt={`${beer.name} image`} />
                        <h2>{beer.name}</h2>
                    </Link>
                    <h3>{beer.tagline}</h3>
                    <p>
                        <b>Created by: </b>
                        {beer.contributed_by}
                    </p>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default AllBeersPage
