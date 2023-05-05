import Header from "../Header"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";


function SingleBeer(){
    const [foundBeer, setFoundBeer] = useState(null)
    const { beerId } = useParams()
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response => {
            setFoundBeer(response.data)
        })
    }, [beerId])

    return(
        <>
        <Header />
        <div className="beerDetail">
        <img src={foundBeer?.image_url} alt="beer" />
        <h1>{foundBeer?.name}</h1>
        <p>{foundBeer?.tagline}</p>
        <p>{foundBeer?.first_brewed}</p>
        <p>{foundBeer?.attenuation_level}</p>
        <p>{foundBeer?.description}</p>
        <p>{foundBeer?.contributed_by}</p>
        </div>
        </>
    )
}

export default SingleBeer