import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import beersService from '../../services/ironBeerService'
import { Container, Row, Col, Button } from 'react-bootstrap'
import NavBar from '../../components/navbar/NavBar'

function BeerDetails() {

    const [beerDetails, setBeerDetails] = useState({})
    const { _id } = useParams()
    console.log(_id)
    useEffect(() => {
        beersService
            .getOneBeer(_id)
            .then(({ data }) => setBeerDetails(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <NavBar />


            <Container>
                <h1>{beerDetails.name}</h1>
                <hr />
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h3>Información</h3>
                        <p>{beerDetails.tagline}</p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default BeerDetails