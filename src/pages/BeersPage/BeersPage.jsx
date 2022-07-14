import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import beerService from "../../services/beer.services"
import './BeersPage.css'

const BeersPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beerService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Container>

                <h1>Lista</h1>
                <Row>

                    {
                        beers.map(({ name, _id, image_url, tagline, contributed_by }) => {
                            return (
                                <Col md={{ span: 3, offset: 1 }}>
                                    <Link to={`/beers/${_id}`}>
                                        <div key={_id} className="beer">
                                            <img src={image_url} alt="beerImage" />
                                            <p>{name}</p>
                                            <p>{tagline}</p>
                                            <p>{contributed_by}</p>

                                        </div>
                                    </Link>
                                </Col>

                            )
                        })
                    }
                </Row>

            </Container>
        </>

    )
}

export default BeersPage