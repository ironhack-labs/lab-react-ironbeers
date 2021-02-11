import React from 'react';
import axios from 'axios';
import './Beers.css';
import { Link } from 'react-router-dom'

function Beers(props) {
    const beersList = props.beersList.map(beer => {
        return (
            <div>
                <div key={beer.name} className="beerItem">
                    <div className="beerItemImg">
                        <img src={beer.image_url} alt={beer.name} />
                    </div>
                    <div className="beerItemText">
                        <Link to="/beers/:beerId">
                            <h4>{beer.name}</h4>
                            <h6>{beer.tagline}</h6>
                            <p>Created by: {beer.contributed_by.split("<", 1)}</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>{beersList}</div>
    )
}

export default Beers
