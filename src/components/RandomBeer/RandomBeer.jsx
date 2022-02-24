import { useState, useEffect } from "react"
import { Row, Col, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import axios from "axios"
import WithNavbar from "../WithNavbar/WithNavbar"

const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState({})

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(data => {
                setRandomBeer(data)
            })
    }, [])

    return (
        <WithNavbar>
            <Row>
                <Col>
                    <img src={randomBeer.data?.image_url} style={{ width: "100px" }} />
                    <h1>{randomBeer.data?.name}</h1>
                    <p>{randomBeer.data?.tagline}</p>
                    <p>{randomBeer.data?.first_brewed}</p>
                    <p>{randomBeer.data?.attenuation_level}</p>
                    <p>{randomBeer.data?.description}</p>
                    <p>{randomBeer.data?.contributed_by}</p>
                </Col>
            </Row>
        </WithNavbar>
    )
}

export default RandomBeer