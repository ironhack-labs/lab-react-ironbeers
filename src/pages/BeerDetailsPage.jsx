import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {

    const [beer, setBeer] = useState(null)
    const {beerId} = useParams()

    const getSingleBeer = async id => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            setBeer(response.data)
            
        } catch (error) {
            console.log('error fetching details', error)
            
        }
    }

    useEffect(()=>{
        getSingleBeer(beerId)
    },[beerId])

    return(
        <div>
        {!beer && <h3>No beer was found</h3>}
        {beer && (
            <div >
                <img src={beer.image_url} />
                <h1>{beer.name}</h1>
                <h3>{beer.tagline}</h3>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <h3>{beer.description}</h3>
                <h5>{beer.contributed_by}</h5>

            </div>
            )
        }
        
        </div>
    )


}

export default BeerDetailsPage;
