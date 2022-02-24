import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import beersService from "../../services/beers.services"
import './DetailsPage.css'


function BeersDetailsPage() {

    const [beerDetails, setBeerDetails] = useState({})
    const { beers_id } = useParams()

    useEffect(() => {
        beersService
            .getOneCoaster(beers_id)
            .then(({ data }) => setBeerDetails(data))
            .catch(err => console.log(err))
    }, [])
    const { name, image_url, tagline, first_brewed, attenuation_level, description, contributed_by } = beerDetails

    return (
        <Container>
            <Row className="details">
                <Col>
                    <img src={image_url} />
                    <Row>
                        <Col md={8}>
                            <h3>{name}</h3>
                            <p>{tagline}</p>
                        </Col>
                        <Col md={4}>
                            <p>{attenuation_level}</p>
                            <p>{first_brewed}</p>
                        </Col>
                    </Row>
                    <p>{description}</p>
                    <p>{contributed_by}</p>
                </Col>
            </Row>
            <Link to={'/beers/'}>
                <div className="d-grid gap-2 mb-5">
                    <Button variant="dark">Go back</Button>
                </div>
            </Link>
        </Container>
    )
}
export default BeersDetailsPage