import beerService from "../../services/beer.services";
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
    const { beerId } = useParams()
    const [beer, setBeer] = useState()

    useEffect(() => {
        getBeer()
    }, [])

    const getBeer = () => {
        beerService
            .getOneBeer(beerId)
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

export default BeerDetailsPage;
