import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
import './BeerList.css'


const BeersList = () => {
    const [loading, setLoading] = useState(true)
    const [beers, setBeers] = useState(null)
    
    // seguidos los pasos de la clase anterior de Pablo

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
        <div>
            {loading ? (<p><Loading/></p>) : (
                beers && beers.map(beer => (
                    <div className="wrapper">
                    <div key={beer._id}>
                        <div className='product-img'>
                        <img src={beer.image_url} width="150" height="350" alt="beer" className="BeerImg"/>
                        </div>
                        <div className="product-info">
                            <h1>{beer.name}</h1>
                            <div className='product-text'>
                            <h3>{beer.tagline}</h3>
                            <div className='text-description'>
                            <h6>{beer.description}</h6>
                            </div>
                            </div>
                            <p><strong>Created by: </strong>{beer.contributed_by}</p>
                        </div>
                    </div>
                </div>
                ))
            )}
        </div>
        </>
    )
}



export default BeersList;


