import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import beersService from './../../services/beers.services'

const BeersDetails = () => {

    const [beer, setBeer] = useState({})

    const { beer_id } = useParams()

    useEffect(() => {
        beersService
            .getBeerDetails(beer_id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    })
    return (
        <>       <h1>estoy</h1>
            <h1>{beer.name}</h1>
        </>

    )
}
export default BeersDetails



