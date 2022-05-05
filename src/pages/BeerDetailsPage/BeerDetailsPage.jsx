import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ironBeers from './../../services/beers.services'
import { Container, Row, Col } from 'react-bootstrap'

function BeerDetailsPageWOW() {
    console.log('alkjdfasdkfjadshflkjasdhfalskdjfhaslkdfjhsad')
    const [beerDetails, setBeerDetails] = useState({})
    const { id } = useParams()

    useEffect(() => {
        ironBeers
            .getOneBeer(id)
            .then(({ data }) => setBeerDetails(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <h1>Detalles de {beerDetails.name}</h1>
            <hr />
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                    <h3>Información</h3>
                    <p>{beerDetails.tagline}</p>
                </Col>
                <Col md={6}>
                    <img style={{ width: '100%' }} src={beerDetails.image_url} alt="" />
                </Col>
            </Row>

        </Container>
    )
}

export default BeerDetailsPageWOW