import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
    const {beerId} = useParams()
    const[beer, setBeer] = useState()


    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then ((response) => {
            setBeer(response.data)
            console.log(response.data)
        })
        .catch ((error) => {
            console.log(error)
        })
    },[beerId])

    if (!beer) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div><img src={beer.image_url}
                          style={{ height: '100px', objectFit: 'contain' }}/></div>
            <h3>{beer.name}</h3>
            <h3>{beer.tagline}</h3>
            <h3>{beer.first_brewed}</h3>
            <h3>{beer.attenuation_level}</h3>
            <h3>{beer.description}</h3>
            <h3>{beer.contributed_by}</h3>
        </div>
    )
}

export default BeerDetailsPage;
