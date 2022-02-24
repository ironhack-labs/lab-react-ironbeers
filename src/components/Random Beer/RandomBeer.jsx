import Header from "../Header/Header";
import beersService from "../../services/beers.service";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Button, Row, Card, Col } from "react-bootstrap";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    beersService
      .getRandomBeer()
      .then(({ data }) => setRandomBeer(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md={3}>
            <img
              style={{ width: "100%" }}
              src={randomBeer.image_url}
              alt={randomBeer.name}
            />
          </Col>
          <Col md={{ span: 4, offset: 1 }}>
            <h3>{randomBeer.name}</h3>
            <p>
              <span className="tagline">{randomBeer.tagline}</span>
              <span className="firstBrewed">{randomBeer.first_brewed}</span>
            </p>
            <p>{randomBeer.description}</p>

            <p>{randomBeer.attenuation_level}</p>
            <p className="contributedBy">{randomBeer.contributed_by}</p>
            <Link to="/">
              <Button variant="dark">Back</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RandomBeer;
