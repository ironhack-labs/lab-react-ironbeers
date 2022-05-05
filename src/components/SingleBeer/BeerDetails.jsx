import { useState, useEffect } from "react";
import beerService from "../../services/beers.services";
import { useParams } from "react-router-dom"



function BeerDetails() {
    const [oneBeer, setOneBeer] = useState({});

    const { id } = useParams()


    useEffect(() => {
        beerService
            .getOneBeer(id)
            .then(({ data }) => {

                setOneBeer(data);
            })
    }, [])


    return (
        <div className="container">
            <img src={oneBeer.image_url} alt="beerimg"></img>
            <h1>{oneBeer.name}</h1>
            <h2>{oneBeer.tagline}</h2>
            <p>{oneBeer.first_brewed}</p>
            <p>{oneBeer.attenuation_level}</p>
            <p>{oneBeer.description}</p>
            <p>{oneBeer.contributed_by}</p>

        </div>)

}

export default BeerDetails;
