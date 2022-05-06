import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ironBeers from '../../services/beers.services'
import { Container, Row, Col } from 'react-bootstrap'

function BeerSelected() {
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
            <h1>{beerDetails.name}</h1>
            <hr />
            <Row>
                <Col md={{span: 6}}>
                    <img className="img-detail" src={beerDetails.image_url} alt="" />
                </Col>
                <Col md={{span: 3 }}>
                    <h2><strong>{beerDetails.tagline}</strong></h2>
                    <p>{beerDetails.description}</p>
                    <p><strong>First brewed</strong><br></br> {beerDetails.first_brewed}</p>

                </Col>
            </Row>

        </Container>
    )
}

export default BeerSelected