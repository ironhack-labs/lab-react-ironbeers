import Header from "../Header/Header"
import BeersService from "../../services/beers.services"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Card, Col, Container, Row } from "react-bootstrap"

const Beers = () => {


    const [beers, setBeers] = useState([])

    useEffect(() => {

        BeersService
            .getBeers()
            .then(({ data }) => {
                setBeers(data)
            })
            .catch(err => console.log(err))


    }, [])


    return (
        <>
            <Header />
            {
                beers.map(elm => {
                    return (

                        <Row className="card">
                            <Col xs={12} md={8} ls={2} >
                                <Link className="cardLink" to='/beers/:beerId'>
                                    <Card className="cardBeer">
                                        <Card.Img variant="top" src={elm.image_url} />
                                        <Card.Body>
                                            <Card.Title>{elm.name}</Card.Title>
                                            <Card.Text>{elm.tagline}</Card.Text>
                                            <Card.Text>{elm.contributed_by}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row >
                    )
                })
            }

        </>
    )

}

export default Beers