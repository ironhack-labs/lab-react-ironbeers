import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import beersService from "../../services/beers.services"
import { Row, Col, Container, Button } from "react-bootstrap"
// import Loader from "../../components/Loader/Loader"


const BeersDetailsPage = () => {

    const [beer, setBeers] = useState()

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        beersService
            .getRandomBeer()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            {
                !beer
                    ?
                    <h1>CHARGING...</h1>
                    :
                    <>
                        <h1>Detalles de {beer.name} || {beer.attenuation_level}%</h1>
                        <img src={beer.image_url} style={{ width: '10%' }} />
                        <hr />

                        <Row>

                            <Col md={{ span: 12 }}>
                                <p>{beer.description}</p>
                                <p>{beer.brewers_tips}</p>
                                <p>{beer.contributed_by}</p>

                                <hr />

                                <Link to="/beers">
                                    <Button variant="dark">Volver a la galería</Button>
                                </Link>

                            </Col>



                        </Row>
                    </>
            }

        </Container>
    )
}

export default BeersDetailsPage