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
        <div>
            {console.log(id)}
            <div>

                <div className="pt-5">

                    <img className="beerImg" src={beerDetails.image_url} alt="" srcset="" />
                    <h1>{beerDetails.name}</h1>
                    <p className="font-weight-light">{beerDetails.tagline}</p>
                    <p className="font-weight-light">{beerDetails.first_brewed}</p>
                    <div className="textDes">
                        <p className="text-justify">{beerDetails.description}</p>
                    </div>
                    <p className="font-weight-light">{beerDetails.attenuation_level}</p>
                    <p>{beerDetails.contributed_by}</p>
                    <Link to={'/Beers'}>Back to Beers</Link>

                </div>
            </div>
        </div>
    )
}
