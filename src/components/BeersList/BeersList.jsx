import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBeers, searchBeer } from "../../services/BeersService";

import './BeerList.css'

const BeersList = () => {
    const [loading, setLoading] = useState(true)
    const [beersList, setBeers] = useState([])

    
    useEffect(() => {
        getBeers()
            .then(beers => {
                console.log(beers)
                setBeers([...beers])
                setLoading(false)
            })
    }, [])

    const handleChange = (event) => {
        const { value } = event.target
        searchBeer(value)
            .then(beersFound => setBeers(beersFound))
    }
    
    
    return (
        <div>
            <div className="p-3">
                <label className="m-2">Find a beer: </label>
                <input type="text" name="" id="" onChange={handleChange} />
            </div>
            {loading ? <p className="loading">Loading...</p> : beersList.map(beer => {
                return(
                    <div key={beer._id}>
                        <div className="beer-box">
                            <img className="beer-image" src={beer.image_url} alt={beer.name} />
                            <div className="beer-info">
                                <Link to={`/beers/${beer._id}`}><h3 className="mb-3">{beer.name}</h3></Link>
                                <h4 className="mt-1">{beer.tagline}</h4>
                                <p><strong>Created by: </strong>{beer.contributed_by}</p>
                            </div>
                        </div>
                        <hr />
                    </ div>
                )
            })
        }
        </div>
    )
}

export default BeersList