import { Col } from 'react-bootstrap';

const BeerInfo = ({ image_url, name, tagline, first_brewed, contributed_by, attenuation_level, description }) => {

    return (
        <>
            <Col md={{ span: 2, offset: 2 }}>
                <img src={image_url} alt="" />
            </Col>
            <Col md={6} className="beer-dets">
                <h2>{name}</h2>
                <h4>{tagline}</h4>
                <h6>First brewed: {first_brewed}</h6>
                <h6>Attenuation level: {attenuation_level}</h6>
                <p>{description}</p>
                <h6>Contributed by: {contributed_by}</h6>
            </Col>
        </>
    )
}

export default BeerInfo 