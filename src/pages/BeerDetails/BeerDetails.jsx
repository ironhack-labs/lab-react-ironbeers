import './BeerDetails.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import beersService from '../../services/beers.service'

import SingleBeer from '../../components/SingleBeer/SingleBeer'

function BeerDetailsPage(){

    const { beer_id } = useParams()
    const [beer, setBeer] = useState({})
    console.log(beer)

    useEffect(()=>{
        beersService
            .getBeerById(beer_id)
            .then(response => {
                setBeer(response.data)
            })
    }, [beer_id])

    return(
        <>
            {beer && <SingleBeer beer={beer} />}
        </>
    )
}

export default BeerDetailsPage