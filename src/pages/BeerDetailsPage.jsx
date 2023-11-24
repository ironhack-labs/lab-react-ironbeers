import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import beersService from "../services/beersService";



const BeerDetailsPage = () => {

    const { beerId } = useParams()
    console.log(beerId)
    const [beer, setBeer] = useState({})

    useEffect(() => {
        loadBeerDetail()
    }, [])


    const loadBeerDetail = () => {

        beersService
            .getBeers(beerId)
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






