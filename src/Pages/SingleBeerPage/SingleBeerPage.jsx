import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import BeerCard from "../../components/BeerCard/BeerCard"
import Nav from "../../components/Navbar/Navbar"


const SingleBeerPage = () => {

    const { beer_id } = useParams()

    const [oneBeer, setOneBeer] = useState({})

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beer_id}`)
            .then(response => setOneBeer(response.data))
    })



    return (
        <>
            <Nav />
            <BeerCard beer={oneBeer} />
        </>
    )
}

export default SingleBeerPage