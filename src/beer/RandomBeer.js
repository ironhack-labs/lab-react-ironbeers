import React from "react"; 
import { useParams } from 'react-router-dom'; 
import Header from "../header"; 
import { beers } from './Beers'; 
import { useState, useEffect } from "react"; 
import axios from "axios";


const RandomBeer = () => { 
    const params = useParams()
    const id = params.id 
    const [beer, setBeer] = useState([]);  

    useEffect(() => {
        // fetch data from beers api
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`) 
        .then(response => {
            console.log(response.data)
            // set state of characters
            setBeer(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className="randombeer-img">
                <img src={beer.image_url} alt='beer-img' className='beer-info-img'/>
            </div>

            <div>
                <span className="randombeer-name">{beer.name}</span>
                <span className="randombeer-level">{beer.attentuation_level}</span>
            </div>

            <div>
                <span className="randombeer-tagline">{beer.tagline}</span>
                <span className="randombeer-brewed">{beer.first_brewed}</span>
            </div>

            <div>
                <span className="randombeer-description">{beer.description}</span>
            </div>
            
            <div> 
                <span className="randombeer-contributor">{beer.contributed_by}</span>
            </div> 

        </div>
    );
}

export default RandomBeer;