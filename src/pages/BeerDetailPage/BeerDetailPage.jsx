import { Container, Row, Button, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import beersService from "../../services/beers.services"
import Loader from "../../components/Loader/Loader"



const BeerDetailPage = () => {

    const { beer_id } = useParams()

    const [beer, setBeer] = useState()

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        beersService
            .getOneBeer(beer_id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            {
                !beer
                    ?
                    <Loader />
                    :
                    <>
                        <h1>Detalles de {beer.name}</h1>
                        <hr />

                        <Row>

                            <Col md={{ span: 6 }}>
                                <h3>Especificaciones</h3>
                                <p>{beer.description}</p>
                                <hr />

                                <Link to="/beers">
                                    <Button variant="dark">Volver a la galería</Button>
                                </Link>

                            </Col>

                            <Col md={{ span: 4 }}>
                                <img src={beer.image_url} style={{ width: '100%' }} />
                            </Col>

                        </Row>
                    </>
            }

        </Container>
    )
}
export default BeerDetailPage
