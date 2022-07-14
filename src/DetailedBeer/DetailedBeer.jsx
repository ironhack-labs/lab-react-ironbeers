import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import beersService from '../services/beers.services'
import './DetailedBeer.css'

const DetailedBeer = () => {
    const { id } = useParams()

    const [beer, setBeer] = useState('')

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        beersService
            .getBeer(id)
            .then(response => {
                console.log('NO LLEGÓ???', response.data)
                setBeer(response.data)
            })
            .catch(e => console.log(e))
    }

    return (
        <>
            <h1>This is a beer:</h1>
            <div className="singleBeerCard">
                <img src={beer.image_url} alt="" />
                <p>{beer.name}</p>
                <p>{beer.description}</p>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.contributed_by}</p>
            </div>
        </>
    )
}

export default DetailedBeer