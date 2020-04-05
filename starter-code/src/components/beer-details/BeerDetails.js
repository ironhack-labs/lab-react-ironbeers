import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export const BeerDetails = () => {
    const [beerDetails, setBeerDetails] = useState({});
    const { id } = useParams();

    const getBeerDetails = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then((res) => {
                setBeerDetails(res.data)
            })
    }

    useEffect(() => {
        getBeerDetails();
    }, [id])


    return (
        <div className="container">
            <div className="d-flex justify-content-center">

                <div className="border m-5 w-50">

                    <img className="img-fluid" style={{height:'400px'}}src={beerDetails.image_url} alt="" srcset="" />
                    <h1>{beerDetails.name}</h1>
                    <p className="font-weight-light">{beerDetails.tagline}</p>
                    <p className="font-weight-light">{beerDetails.first_brewed}</p>
                    <div className="text-center mx-3">
                        <p className="text-justify mx-3">{beerDetails.description}</p>
                    </div>
                    <p className="font-weight-light">{beerDetails.attenuation_level}</p>
                    <p>{beerDetails.contributed_by}</p>
                <Link className="btn btn-outline-primary my-3" to={'/'}>Back to Home</Link>


                </div>

            </div>

        </div>
    )
}
