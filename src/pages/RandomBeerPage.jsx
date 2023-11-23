import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"


function RandomBeersPage() {

    let { beerId } = useParams()
    const [beer, setBeer] = useState(null)

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => {
                setBeer(response.data)
            })
            .catch(error => {
                console.log("ERROR", error)
            })
    }, [beerId])

    if (beer === null) {
        return (<div>Random Beer</div>)
    }
    return (
        <div>
            <h1>Random Beer</h1>
            <hr />
            <div>
                <img src={beer.image_url} alt="beer" />
                <h2>{beer.name}</h2>
                <h6>{beer.tagline}</h6>
                <h6>{beer.first_brewed}</h6>
                <h6>{beer.attenuation_level}</h6>
                <p>{beer.description}</p>
                <p>Contributed by: {beer.contributed_by}</p>
            </div>
        </div>
    )
}

export default RandomBeersPage;
