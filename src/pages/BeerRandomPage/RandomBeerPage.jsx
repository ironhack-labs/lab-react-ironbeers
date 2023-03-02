import { useEffect, useState } from "react"
import { Col, Container, Row, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import BeerDetails from "../../components/BeerDetails/BeerDetails"
import beersService from "../../services/beers.service"

const RandomBeerPage = () => {
    const [beer, setBeer] = useState([])

    useEffect(() => {
        beersService
            .getRandomBeer()
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <BeerDetails  {...beer} />
    )
}
export default RandomBeerPage