import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import axios from "axios"

const BeersDetails = () => {

    const { id } = useParams()

    const [foundBeer, setFoundBeer] = useState({})

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(({ data }) => {
                setFoundBeer(data)
            })
    }, [id])

    return (
        <div>
            <img src={foundBeer.image_url} />
            <h3>{foundBeer.name}</h3>
            <p>{foundBeer.attenuation_level}</p>
            <h4>{foundBeer.tagline}</h4>
            <p>{foundBeer.first_brewed}</p>
            <p>{foundBeer.description}</p>
            <p>{foundBeer.contributed_by}</p>
        </div>
    )
}

export default BeersDetails