import React from 'react';
import { Link } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';
import axios from 'axios'
import './BeerList.css'

const BeerList = ({name,id,image_url,tagline,contributed_by}) => {

    const [loading, setLoading] = useState(true)
    const [beers, setBeers] = useState(null)

    const fetchBeers = useCallback(() => {
        return axios.get("https://ih-beers-api2.herokuapp.com/beers")
    }, [beers])

    useEffect(() => {
        fetchBeers()
        .then(response => setBeers(response.data))
    }, [fetchBeers])

    useEffect(() => {
        if(beers) {
            setLoading(false)
        }
    }, [beers])

    return (

        <>          
            {loading ? (<p>loading</p>) : beers.map((beer) => (
    
                <div className="card mb-3" key={beer.id} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Link to={'/'}>
                                <img src={beer.image_url} className="img-fluid rounded-start" alt={beer.name}/>
                            </Link>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{beer.name}</h5>
                                <p className="card-text">{beer.tagline}</p>
                                <p className="card-text"><small className="text-muted">Created by {beer.contributed_by}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>

    );
};

export default BeerList;