import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import './BeerCard.css';

const BeerCard = ({ image_url, name, tagline, _id }) => (
  <Link to={`/beers/${_id}`}>
    <Card className="h-100">
      <Row>
        <Col xs={4}>
          <Card.Img className="beer-img" variant="top" src={image_url} />
        </Col>
        <Col xs={8}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{tagline}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  </Link>
);
export default BeerCard;
