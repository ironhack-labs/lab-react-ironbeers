import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL="https://ih-beers-api2.herokuapp.com/beers";





function BeerDetailsPage() {
    
    const { beerId } = useParams(); 
    const [beer, setBeer] = useState(null);
    const [fetching, setFetching] = useState(true);


useEffect(()=>{
    axios.get(`${API_URL}/${beerId}`).then((response)=>{
        setBeer(response.data);
        setFetching(false)
    })
    .catch((error)=> console.log(error))

},[beerId])

return(
    <div>
     {fetching ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h1>{beer.name}</h1>
                    <img src={beer.image_url} alt={beer.name} />
                    <p>Tagline: {beer.tagline}</p>
                    <p>First Brewed: {beer.first_brewed}</p>
                    <p>Attenuation Level: {beer.attenuation_level}</p>
                    <p>Description: {beer.description}</p>
                    <p>Contributed By: {beer.contributed_by}</p>
                </div>
            )}
    </div>
)


}

export default BeerDetailsPage;
