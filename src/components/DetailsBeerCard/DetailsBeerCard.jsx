import { Button, Col, Container, Row } from "react-bootstrap"
import './DetailsBeerCard.css'

const DetailsBeerCard = ({ beer }) => {
    const { image_url, name, description, tagline, first_brewed, attenuation_level, contributed_by } = beer
    return (
        beer &&
        <Container>
            <h1 className="mb-4">Details of  {name}</h1>
            <hr />
            <Row>
                <Col md={{ span: 4 }}>
                    <img src={image_url} className="DetailsBeerCard" style={{ width: '100%' }} />
                </Col>
                <Col md={{ span: 6, offset: 1 }}>
                    <h3>Description</h3>
                    <p>{description}</p>
                    <ul>
                        <li>Tag Line: {tagline}</li>
                        <li>First Brewed: {first_brewed}</li>
                        <li>Attenuation_level: {attenuation_level}</li>
                        <li>Cntributed by: {contributed_by}</li>
                    </ul>
                    <hr />
                </Col>
            </Row>
        </Container >
    )
}

export default DetailsBeerCard