import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import beerService from '../../services/beers.services'
import { Row, Col, Container, Button } from "react-bootstrap"
import Navigation from "../../components/Navigation/Navigation"

const BeersDetailsage = () => {

    const { beer_id } = useParams()

    const [beer, setBeer] = useState()

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beerService
            .getOneBeer(beer_id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Navigation />
            {
                !beer
                    ?
                    <h1>Cargando</h1>
                    :
                    <>
                        <Row>
                            <Col md={{ span: 6 }}>
                                <img src={beer.image_url} style={{ width: '10%' }} />
                                <h1>{beer.name}</h1>
                                <h3>Especificaciones</h3>
                                <p>{beer.tagline}</p>
                                <p>{beer.first_brewed}</p>
                                <p>{beer.attenuation_level}</p>
                                <p>{beer.description}</p>
                                <p>{beer.contributed_by}</p>
                            </Col>
                        </Row>
                    </>
            }
        </Container>
    )
}

export default BeersDetailsage