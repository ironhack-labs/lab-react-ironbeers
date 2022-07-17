import React from 'react';
import { beers } from './ListBeers';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";
import Header from '../components/Header';


export default function SingleBeer() {

    const params = useParams()

    const id = params.id


    const [beer, setBeer] = useState([]);

    //因為 <Link to={`/onebeer/${beer._id}`}>{beer.name}</Link>

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => {

                // 要用console去看資料結構，這跟網站點進去的有點不一樣
                // console.log(response.data.food_pairing)
                setBeer(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            
            <Header />
            <div className="one-beer-img">
                <img  src={beer.image_url} alt="beerImg" className="beer-detail-img" />
            </div>

            <div className="first-div">
                <span className="onebeer-name">{beer.name}</span>
                <span className="onebeer-level">{beer.attenuation_level}</span>
            </div>

            <div className="second-div">
                <span className="onebeer-tagline">{beer.tagline}</span>
                <span className="onebeer-brewed">{beer.first_brewed}</span>
            </div>

            <div className="third-div">
                <span>{beer.description}</span>
            </div>

            <div className="fourth-div">
                <span className="onebeer-by">by {beer.contributed_by}</span>
            </div>
        
        </div>
    )
}
