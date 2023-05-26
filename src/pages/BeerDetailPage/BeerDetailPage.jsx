import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import beersService from "../../services/beers.services"
import { Row, Col, Container, Button, } from "react-bootstrap"
import NavBar from "../../components/Navigation/Navigation"



const BeerDetailsPage = () => {

    const { beer_id } = useParams()

    const [beer, setbeer] = useState()

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        beersService
            .getOneBeer(beer_id)
            .then(({ data }) => setbeer(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <NavBar />
            {
                !beer
                    ?
                    <h1>Loading...</h1>
                    :
                    <>
                        <img src={beer.image_url} alt="" />
                        <h1>Detalles de {beer.name}</h1>
                        <hr />

                        <Row>

                            <Col md={{ span: 6 }}>
                                <p>{beer.tagline}</p>
                                <ul>
                                    <li> {beer.first_brewed}</li>
                                    <li>{beer.attenuation_level}</li>
                                </ul>
                                <hr />
                                <p>{beer.description}</p>
                                <p>{beer.contributed_by}</p>

                                <Link to="/">
                                    <Button variant="dark">Volver a la lista</Button>
                                </Link>

                            </Col>


                        </Row>
                    </>
            }

        </Container>
    )
}

export default BeerDetailsPage