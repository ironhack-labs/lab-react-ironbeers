import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from '../../components/Header/Header'

import axios from "axios"

const BeersDetails = () => {

    const { beer_id } = useParams()

    const [foundBeer, setFoundBeer] = useState()

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beer_id}`)
            .then((response) => {
                setFoundBeer(response.data)
            })
    }, [beer_id])

    return (
        <div>
            <Header />
            <img src={foundBeer?.image_url} />
            <h3>{foundBeer?.name}</h3>
            <p>{foundBeer?.attenuation_level}</p>
            <h4>{foundBeer?.tagline}</h4>
            <p>{foundBeer?.first_brewed}</p>
            <p>{foundBeer?.description}</p>
            <p>{foundBeer?.contributed_by}</p>
        </div>
    )
}

export default BeersDetails