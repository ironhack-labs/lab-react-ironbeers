import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import beerService from "../../services/beer.services"
import { Row, Col, Container, Button } from "react-bootstrap"
import Navigation from "./../../components/NavBar/NavBar"


const BeerDetailsPage = () => {

    const { beer_id } = useParams()

    const [beer, setBeer] = useState()

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        beerService
            .getOneBeer(beer_id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Navigation />
            <Container>
                {
                    !beer
                        ?
                        <h1>loading</h1>
                        :
                        <>
                            <h1>{beer.name}'s Details</h1>
                            <hr />

                            <Row>

                                <Col md={{ span: 6 }}>

                                    <h2>{beer.name}</h2>
                                    <h2>{beer.tagline}</h2>

                                    <h4>Description: {beer.description}</h4>

                                    <h3>First Brewed: {beer.first_brewed}</h3>
                                    <h3>Attenuation Level: {beer.attenuation_level}</h3>


                                    <p>Contributed By: {beer.contributed_by}</p>
                                    <hr />

                                    <Link to="/beers">
                                        <Button variant="success">Volver </Button>
                                    </Link>

                                </Col>

                                <Col md={{ span: 2 }}>
                                    {<img className="beerImgDetail" src={beer.image_url} alt="Beers" style={{ width: '100%' }} />}
                                </Col>

                            </Row>
                        </>
                }

            </Container>
        </div>
    )
}

export default BeerDetailsPage