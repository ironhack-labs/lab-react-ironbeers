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
            <div class="one-beer-img">
                <img height='400px' src={beer.image_url} alt="beerImg" className="beer-img" />
            </div>

            <div>
                <span>{beer.name}</span>
                <span>{beer.attenuation_level}</span>
            </div>


            <div>
                <span>Tagline: {beer.tagline}</span>
                <span>{beer.first_brewed}</span>
            </div>

            <div>
                <span>{beer.description}</span>
            </div>


            <div>
                <span>{beer.contributed_by}</span>
            </div>

            <div>
                <span>{beer.food_pairing}</span>
            </div>
            {/* <ul>
                <li>{beer.food_pairing[0]}</li>
                <li>{beer.food_pairing[1]}</li>
                <li>{beer.food_pairing[2]}</li>
            </ul> */}


            {/* <div>
            {beer.food_pairing.map(function (pair) {
                return (
                    <div >
                      
                        <span> {pair}</span>
                    </div>
                )
            })
            }
            </div> */}
        </div>
    )
}
