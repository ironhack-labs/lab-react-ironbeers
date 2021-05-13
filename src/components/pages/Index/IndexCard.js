import { Col, Image, Row } from 'react-bootstrap';
import beers from '../../../assets/beers.png';
import random from '../../../assets/random-beer.png';
import newBeer from '../../../assets/new-beer.png';
import './IndexCard.css';

const IndexCard = ({ imageUrl, title, description }) => {
  const imagesDict = { beers, random, newBeer };
  return (
    <section className="card-section">
      <Row>
        <Image src={imagesDict[imageUrl]} alt="beers" fluid></Image>
      </Row>
      <Row>
        <Col md={8}>
          <h2>{title}</h2>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <p>{description}</p>
        </Col>
      </Row>
    </section>
  );
};
export default IndexCard;
