import { Routes, Route, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BeerDetailsPage() {

    const { beerId } = useParams()
    const [beer, setBeer] = useState(null)


    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response)=>{
           const beerDetails = response.data
           setBeer(beerDetails)
           console.log(beerDetails)
        })
        .catch((err)=>{
          console.log(err)
        })

    },[])

    return(
        <div>
            {beer ? (
                <>
                    <img src={beer.image_url} alt={beer.name} style={{ width: '50px', marginRight: '10px' }} />
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <h5>Created by: {beer.contributed_by}</h5>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}


export default BeerDetailsPage;
