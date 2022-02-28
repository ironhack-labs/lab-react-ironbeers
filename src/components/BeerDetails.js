import { useParams, Link } from "react-router-dom"
import Header from "./Header"
import { useEffect, useState } from "react"
import axios from "axios"

function BeerDetails() {
    const [beer, setBeer] = useState([])
    // const [beer, setBeer] = useState(undefined)
    const { beerId } = useParams()
    // console.log(beerId)
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response =>
                setBeer(response.data)
            )
            .catch(err => console.log(err))
    }, [beerId])

    return (
        <>
            {/* {beer && */}
            <div>
                <Header />
                <div className="beer-details">
                    <h1>{beer.name}</h1>
                    <img src={beer.image_url} alt={beer.name} style={{width : '120px'}}/>
                    <p>Tagline: {beer.tagline}</p>
                    <p>First Brewed: {beer.first_brewed}</p>
                    <p>Brewers Tips: {beer.brewers_tips}</p>
                    <p>Attenuationa Level: {beer.attenuation_level}</p>
                    <p>Description: {beer.description}</p>
                    <p>Contributed by: {beer.contributed_by}</p>
                    <Link to='/'>
                        <button>Back to the Homepage</button>
                    </Link>
                </div>
            </div>
            {/* } */}
        </>
    )
}

export default BeerDetails
