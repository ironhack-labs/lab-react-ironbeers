import { Container, Row, Col, Card } from "react-bootstrap"
import NavbarHeader from "../../components/Navigation/Navbar"
import { useEffect, useState } from "react"
import aleService from './../../services/beer.services'


const RandomBeerPage = () => {

    const [beers, setBeers] = useState({})

    useEffect(() => {
        loadBeers()
    },)

    const loadBeers = () => {
        aleService
            .getRandomBeer()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    return (

        <div>

            <NavbarHeader></NavbarHeader>
            <Container >
                <Row className="justify-content-center">
                    <Col className="col-8">
                        <h1>{beers.name}</h1>
                        <hr />
                        <Card className='m-3 p-3'>
                            <Card.Img variant="top" src={beers.image_url} className="beers-img" />
                            <hr />
                            <Card.Text>{beers.tagline}</Card.Text>
                            <Card.Text> <strong>Description:</strong> {beers.description}</Card.Text>
                            <Card.Text> <strong>First Brewed:</strong> {beers.first_brewed}</Card.Text>
                            <Card.Text> <strong>Attenuation_level:</strong> {beers.attenuation_level}</Card.Text>
                            <Card.Text> <strong>Created by: </strong> {beers.contributed_by}</Card.Text>
                        </Card>
                    </Col>
                </Row>


            </Container >


        </div>
    )
}

export default RandomBeerPage