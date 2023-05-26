import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import beersService from "../../services/beers.services"
import { Row, Col, Container, Button } from "react-bootstrap"
// import Loader from "../../components/Loader/Loader"


const BeersDetailsPage = () => {

    const { id } = useParams()

    const [beers, setBeers] = useState()

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        beersService
            .getOneBeers(id)
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            {
                !beers
                    ?
                    <h1>CHARGING...</h1>
                    :
                    <>
                        <h1>Detalles de {beers.name} || {beers.attenuation_level}%</h1>
                        <img src={beers.image_url} style={{ width: '10%' }} />
                        <hr />

                        <Row>

                            <Col md={{ span: 12 }}>
                                <p>{beers.description}</p>
                                <p>{beers.brewers_tips}</p>
                                <p>{beers.contributed_by}</p>

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