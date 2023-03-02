import './BeerDetails.css'
import { Col, Container, Row } from "react-bootstrap"

const BeerDetails = ({ beer }) => {

    return (
        <Container className='mt-3'>
            <Row>
                <Col sm={{ span: 4 }}>
                    <img className="detailsBeerimage" src={beer.image_url} alt={beer.name} />
                </Col>
                <Col sm={{ span: 8 }}>
                    <h2>{beer.name}</h2>
                    <h5>{beer.tagline}</h5>
                    <hr />
                    <div className='text-start'>
                        <p><strong>Description:</strong> {beer.description}</p>
                        <p><strong>Brewer tip:</strong> {beer.brewers_tips}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default BeerDetails
