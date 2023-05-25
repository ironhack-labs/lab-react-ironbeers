import { useState, useEffect } from "react"
import Navigation from "../../components/NavBar/NavBar"
import beerService from "./../../services/beer.services"
import { Link } from "react-router-dom"
import { Col, Container, Card, Row } from "react-bootstrap"
import "./BeerPage.css"


function BeerPage() {
    const [beer, setBeer] = useState()

    const loadBeers = () => {
        beerService
            .getAllBeers()
            .then(({ data }) => {
                setBeer(data)
            })
    }
    useEffect(() => {
        loadBeers()
    })

    return (
        <div>
            <Navigation />
            <Container>
                <h1>ALL THE BEERS</h1>
                <hr />
                <Row>
                    {
                        !beer ? <h1>Loading</h1>
                            :
                            beer.map(elm => {
                                return (
                                    <div className="beerCardDetail">
                                        <Col md={{ span: 3 }}>
                                            <Card key={elm.id} >
                                                <Card.Body>
                                                    <Card.Title>
                                                        {<img className="beerImgDetail" src={elm.image_url} alt="Beers" />}
                                                        <h1><strong>{elm.name}</strong></h1>
                                                        <h2><strong>{elm.tagline}</strong></h2>
                                                        <h3><strong>Contributed by:</strong>{elm.contributed_by}</h3>
                                                        <Link to={`/${elm._id}`} className="btn btn-success btn-lg">Detalles</Link>
                                                    </Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </div >
                                )
                            })
                    }
                </Row>
            </Container >
        </div >
    )
}

export default BeerPage
