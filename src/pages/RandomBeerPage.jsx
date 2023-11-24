import beerService from "../../services/beer.services";
import { useEffect, useState } from "react"

const RandomBeersPage = () => {
    const [beer, setBeer] = useState()

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        beerService
            .getRandomBeer()
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }

    return (
        beer
            ?
            <div>
                <figure>
                    <img src={beer.image_url} alt={beer.name} />
                </figure>
                <h2>{beer.name}  {beer.attenuation_level}</h2>
                <p>{beer.tagline}  {beer.first_brewed}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>
            :
            <h2>Loading...</h2>
    )
}

export default RandomBeersPage;
