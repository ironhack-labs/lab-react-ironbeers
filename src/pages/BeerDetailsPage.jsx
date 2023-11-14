import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'

const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

function BeerDetailsPage() {

    const [beer, setBeer] = useState();
    const {beerId} = useParams();

    const getBeer = () => {
        axios.get(`${API_URL}/${beerId}`)
            .then((response) => {
                console.log('success', response.data)
                setBeer(response.data)
            })
            .catch((error) => console.log(error));
    };

    useEffect(()=>getBeer(),[]);

    return (
        <>
        <div className='beer-details'>
            <img src={beer.image_url} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
        
        </>
    );
}

export default BeerDetailsPage;
