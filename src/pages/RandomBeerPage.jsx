import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'

const API_random = 'https://ih-beers-api2.herokuapp.com/beers/random'


function RandomBeersPage() {

    const [beer, setBeer] = useState();
    
    const getRandomBeer = () => {
        axios.get(API_random)
            .then((response) => {
                console.log('success',response.data)
                setBeer(response.data)
            })
            .catch((error) => console.log(error));
    }

    useEffect(()=>getRandomBeer(),[]);


    return (
        <div className='beer-details'>
            <img src={beer.image_url} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    );
}

export default RandomBeersPage;
