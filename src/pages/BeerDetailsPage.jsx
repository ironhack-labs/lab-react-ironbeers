import beersService from './../services/beers.services'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function BeerDetailsPage() {

    const { beerId } = useParams()
    const [beer, setBeer] = useState({})

    useEffect(() => {
        loadBeerDetail()
    }, [])

    const loadBeerDetail = () => {
        beersService
            .getDetailsBeers(beerId) 
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>{beer.name}</h1>
            <img src={beer.image_url} alt=""></img>
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.contributed_by}</p>
            <p>{beer.attenuation_level}</p>
        </div>
    )
}
export default BeerDetailsPage;
