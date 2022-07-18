import React from "react"; 
import { useParams } from 'react-router-dom'; 
import Header from "../header"; 
import { beers } from './Beers'; 
import { useState, useEffect } from "react"; 
import axios from "axios";

const SingleBeer = () => { 

    const params = useParams()
    const id = params.id 
    const [beer, setBeer] = useState([]); 

    useEffect(() => {
        // fetch data from beers api
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`) 
        .then(response => {
            console.log(response.data)
            // set state of characters
            setBeer(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className="singlebeer-img">
                <img src={beer.image_url} alt='beer-img' className='beer-info-img'/>
            </div>

            <div>
                <span className="singlebeer-name">{beer.name}</span>
                <span className="singlebeer-level">{beer.attentuation_level}</span>
            </div>

            <div>
                <span className="singlebeer-tagline">{beer.tagline}</span>
                <span className="singlebeer-brewed">{beer.first_brewed}</span>
            </div>

            <div>
                <span className="singlebeer-description">{beer.description}</span>
            </div>
            
            <div> 
                <span className="singlebeer-contributor">{beer.contributed_by}</span>
            </div> 

        </div>
    );
}

export default SingleBeer;