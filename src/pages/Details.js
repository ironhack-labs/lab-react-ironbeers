import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import Header from "../components/Header"

function Details(props) {

    const {beerId} = useParams()
    const [beer, setBeer] = useState(null)

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/" + beerId)
        .then(response => {
            setBeer(response.data)
        })
    }, [])
    

    return(
        <>
            <Header />

            <div>
                <img src={beer.image_url} alt="" />
                <p>{beer.name}</p>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>
        </>
    )
}

export default Details