import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import beerService from "../../services/beer.services"

const RandomBeer = () => {
    const [randomBeer, setRandomBeer] = useState([])

    useEffect(() => {
        loadRandomBeer()
    }, [])

    const loadRandomBeer = () => {
        beerService
            .getRandombeer()
            .then(({ data }) => {
                console.log('random', data)
                setRandomBeer(data)
            })
            .catch(err => console.log(err))
    }


    return (
        <Container>
            <h1>detalles</h1>
            <p>{randomBeer.name}</p>
            <p>{randomBeer.description}</p>
            <img src={randomBeer.image_url} alt="" />

        </Container>
    )
}

export default RandomBeer