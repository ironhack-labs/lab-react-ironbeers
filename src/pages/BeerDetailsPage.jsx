import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function BeerDetailsPage() {

    const apiURL = "https://ih-beers-api2.herokuapp.com/beers/"

    const { beerId } = useParams()

    const [beer, setBeer] = useState({})

    const getBeer = () => {
        axios.get(apiURL + beerId)
            .then((response) => {
                console.log(response.data)
                setBeer(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getBeer()
    }, [])

    return (
        <div key={beer._id} className="beer-details">

            <div className="beer-details-image">
                <img className="image-beer" src={beer.image_url} />
            </div>

            <div className="beer-details-text">
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <h3>Attenuation level: {beer.attenuation_level}</h3>
                <h3>First brewed: {beer.first_brewed}</h3>
                <h3>Brewer's tips: {beer.brewers_tips}</h3>
                <p>{beer.description}</p>
                <p>Contributed by: {beer.contributed_by}</p>
            </div>

        </div>
    )
}

export default BeerDetailsPage
