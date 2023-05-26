import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import beersService from "../../services/beers.services"
import { Row, Col, Container, Button } from "react-bootstrap"
import './BeersDetails.css'
import NavBar from "../../components/NavBar/NavBar"
// import Loader from "../../components/Loader/Loader"

const BeerDetails = () => {
    const { _id } = useParams()
    const [beers, setBeers] = useState()
    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getOneBeer(_id)
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }
    return (
        <Container>
            <NavBar />
            {
                !beers
                    ?
                    // <Loader />
                    <h1>Loading</h1>
                    :
                    <>
                        <h1> {beers.name} details</h1>
                        <hr />

                        <Row>
                            <Col md={{ span: 4 }}>
                                <img className="imageBeer" src={beers.image_url} />
                            </Col>

                            <Col md={{ span: 6 }}>
                                <h3>Especifications</h3>
                                <p>{beers.tagline}</p>
                                <p>{beers.first_brewed}</p>
                                <p>{beers.attenuation_level}</p>
                                <p>{beers.description}</p>
                                <p>{beers.contributed_by}</p>
                                <hr />

                                <Link to="/beers">
                                    <Button variant="dark">Back</Button>
                                </Link>

                            </Col>


                        </Row>
                    </>
            }

        </Container>
    )

}
export default BeerDetails