import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { Link, useParams } from 'react-router-dom'
import beersService from "../../services/beers.services"
import './SingleBeer.css'

const SingleBeer = () => {

    const [beer, setBeer] = useState([])

    const { beer_id } = useParams()

    useEffect(() => {
        beersService
            .getOneBeer(beer_id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container className="SingleBeer" >
            <Row>
                <Col md={{ span: 6, offset: 1 }}>
                    <Card className='mb-3 CoasterCard'>
                        <Card.Body>
                            <h1 className="mb-4">Detalles de {beer.name}</h1>
                            <Card.Text>{beer.tagline}</Card.Text>
                            <Card.Text><b>Contributed By: </b> {beer.contributed_by}</Card.Text>
                            <Card.Text><b>Attenuation Level: </b> {beer.attenuation_level}</Card.Text>
                            <Card.Text><b>Description: </b> {beer.description}</Card.Text>
                        </Card.Body>
                    </Card>

                    <Link to="/AllBeers">
                        <Button as="figure" variant="dark">All Beers</Button>
                    </Link>

                </Col>

                <Col md={{ span: 4 }}>
                    <img className="ImgBeer" src={beer.image_url} />
                </Col>

            </Row>
        </Container >
    )

}


<Link to="/beers">
    <Button as="figure" variant="dark">All Beers</Button>
</Link>

export default SingleBeer