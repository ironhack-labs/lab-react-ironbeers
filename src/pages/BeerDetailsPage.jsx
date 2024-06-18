import { useEffect, useState } from "react";
import { detailBeer } from "../services/BeersServices";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
   const {beerId} = useParams()
   const [beer, setBeers] = useState({})
   const [loading, setLoading] = useState(true)

   useEffect(() => {
    detailBeer(beerId)
        .then((beer) => {
            console.log(beer)
            setBeers(beer)
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
   }, [beerId])

   return (
    <>
    <h2>Details beer</h2>
    { loading ? <p>loading</p> : (
        <div>
            <img src={beer.image} alt={beer.name}></img>
            <h4>{beer.name}</h4>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )}
    </>
   )
}

export default BeerDetailsPage;
