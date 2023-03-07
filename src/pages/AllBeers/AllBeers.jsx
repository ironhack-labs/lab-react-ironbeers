import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'

function AllBeers() {
    const [beers, setBeers] = useState(null);

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                setBeers(response);
            })
            .catch((e) => console.error(e));
    }, []);
    if (!beers) {
        return <div className='loading'>Loading...</div>
    }

    return (
        <div>
            <Header />
            {beers.map((beer) => {
                return (
                    <div className='all-beers-found'>
                        <div className='beer-image'>
                            <img src={beer.image_url} alt='all beers' />
                        </div>
                        <div className='all-beers-info'>
                            <Link to={`/allbeers/` + beer._id}>
                                <h2>{beer.name}</h2>
                            </Link>
                            <p>{beer.tagline}</p>
                            <p>Created by: {beer.contributed_by}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeers