import "./BeerListItem.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BeerListItem = ({ name, image_url, tagline, first_brewed }) => {

    return (
        <Container className="BeerListItem">
            <Row>
                <Col xs={{ span: 3 }}>
                    <div className="imageContainer">
                        <img src={image_url} alt={`icon of ${name}`} />
                    </div>
                </Col>
                <Col xs={{ span: 9 }}>
                    <p>{name}</p>
                    <p>{tagline}</p>
                    <p>{first_brewed}</p>
                </Col>
            </Row>
        </Container>

    )
}

export default BeerListItem