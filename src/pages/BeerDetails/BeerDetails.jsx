import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import beerService from "../../services/beer.services"

const BeerDetails = () => {
    const [beer, setBeer] = useState([])

    const { beerId } = useParams()
    console.log('ID:', beerId)

    useEffect(() => {
        loadOneBeer()
    }, [])

    const loadOneBeer = () => {
        beerService
            .getOneBeer(beerId)
            .then(({ data }) => {
                console.log('ESTO ES DATA', data)
                setBeer(data)
            })
            .catch(err => console.log(err))
    }

    console.log('beer:', beer)

    return (
        <Container>
            <h1>detalles</h1>
            <p>{beer.name}</p>
            <p>{beer.description}</p>
            <img src={beer.image_url} alt="" />

        </Container>
    )
}

export default BeerDetails