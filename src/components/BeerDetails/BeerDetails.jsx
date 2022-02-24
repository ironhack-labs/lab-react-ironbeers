import Header from "../Header/Header";
import beersService from "../../services/beers.service";
import "./BeerDetails.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Button, Row, Card, Col } from "react-bootstrap";

function BeerDetails() {
  const [beerDetails, setBeerDetails] = useState({});
  const { beerId } = useParams();

  useEffect(() => {
    beersService
      .getOneBeer(beerId)
      .then(({ data }) => setBeerDetails(data))
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
              src={beerDetails.image_url}
              alt={beerDetails.name}
            />
          </Col>
          <Col md={{ span: 4, offset: 1 }}>
            <h3>{beerDetails.name}</h3>
            <p>
              <span className="tagline">{beerDetails.tagline}</span>
              <span className="firstBrewed">{beerDetails.first_brewed}</span>
            </p>
            <p>{beerDetails.description}</p>

            <p>{beerDetails.attenuation_level}</p>
            <p className="contributedBy">{beerDetails.contributed_by}</p>
            <Link to="/">
              <Button variant="dark">Back</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BeerDetails;

//  <Card>
//    <Card.Img src={beerDetails.image_url} />
//    <Card.Body>
//      <Card.Title>
//        <div key={beerDetails.name}>{beerDetails.name}</div>
//      </Card.Title>
//      <Card.Text>
//        <div key={beerDetails.tagline}>{beerDetails.tagline}</div>
//        <div key={beerDetails.tagline}>{beerDetails.first_brewed}</div>
//        <div key={beerDetails.attenuation_level}>
//          {beerDetails.attenuation_level}{" "}
//        </div>
//        <div key={beerDetails.description}>{beerDetails.description}</div>
//        <div key={beerDetails.contributed_by}>{beerDetails.contributed_by}</div>
//      </Card.Text>
//    </Card.Body>
//  </Card>;
