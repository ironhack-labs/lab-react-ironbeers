import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import beerService from "../../services/beers.service"
import './BeerDetails.css'


const BeerDetails = () => {

    const [beers, setBeers] = useState()

    const { beer_id } = useParams()

    useEffect(() => {
        beerService
            .getOneBeer(beer_id)
            .then(({ data }) => setBeers(data))
            .catch(err => console.error(err))
    }, [])

    return (

        <Container>
            {
                !beers
                    ?
                    <h1>CARGANDO</h1>
                    :
                    <div className="Detalles">
                        <h1 className="">{beers.name}</h1>
                        <hr />
                        <Col md={{ span: 4 }}>
                            <img src={beers.image_url} style={{ width: '20%' }} />
                        </Col>
                        <Row>
                            <Col md={{ span: 4, offset: 1 }}>
                                <p>{beers.tagline}</p>
                                <p>{beers.attenuation_level}</p>
                                <p>{beers.first_brewed}</p>
                                <p>{beers.description}</p>
                                <p>{beers.contributed_by}</p>
                                <Link to="/beers">
                                    <Button as="div" variant="dark">Volver a la Galería</Button>
                                </Link>
                            </Col>

                        </Row>
                    </div>
            }
        </Container >
    )
}

export default BeerDetails