import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const RandomBeer = () => {
    const [beers, setBeers] = useState([]);

    const getRandomBeers = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random/')
            .then((res) => setBeers(res.data))
    }


    useEffect(() => {
        getRandomBeers();
    }, [])


    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="border m-5">

                    <img className="img-fluid" style={{ height: '400px' }} src={beers.image_url} alt="" srcset="" />
                    <h1>{beers.name}</h1>
                    <p className="font-weight-light">{beers.tagline}</p>
                    <p className="font-weight-light">{beers.first_brewed}</p>
                    <div className="textDes">
                        <p className="text-center mx-3">{beers.description}</p>
                    </div>
                    <p className="font-weight-light">{beers.attenuation_level}</p>
                    <p>{beers.contributed_by}</p>
                    <Link to={'/'}>Back to Home</Link>


                </div>

            </div>
        </div>
    )
}
