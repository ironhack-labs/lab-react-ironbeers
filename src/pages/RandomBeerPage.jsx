import { useEffect, useState } from "react";
import { randomBeer } from "../services/BeersServices";


function RandomBeersPage() {
    const [beer, setBeers] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        randomBeer(beer)
        .then((beer) => {
            setBeers(beer)
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    return (
        <>
        <h2>Random beer</h2>
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

export default RandomBeersPage;
