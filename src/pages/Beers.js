import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Spinner from 'react-spinkit';

export default function Beers() {
    
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => setBeers(response.data))
            .catch((err) => console.log("Error getting Beers from API: ", err))
    }, []);

    return (
        <div>
            {
                (beers.length === 0) ? 
                <div className="loading">
                    <Spinner name="pulse" color="slateblue"/> 
                </div> :
                beers.map((beer) => (
                    <div className="beer-card">
                        <div className="img-container">
                            <img src={ beer.image_url } alt={ beer.name } />
                        </div>
                        <div>
                            <h2>{ beer.name }</h2>
                            <h3>{ beer.tagline }</h3>
                            <p><span>Created by: </span> { beer.contributed_by } </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
