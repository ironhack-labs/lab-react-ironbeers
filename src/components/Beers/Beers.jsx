import Header from "../Header/Header";
import beersService from "../../services/beers.service";
import { useState, useEffect } from "react";
import { Container, Button, Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Beers.css";

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    loadBeers();
  }, []);

  const loadBeers = () => {
    beersService
      .getAllBeers()
      .then(({ data }) => setBeers(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <Container>
        <h1>All Beers</h1>
        <Row>
          {beers.map((beer) => {
            return (
              <Col md={4}>
                <Card>
                  <Link to={`/beers/${beer._id}`}>
                    <Card.Img src={beer.image_url} />
                  </Link>
                  <Card.Body>
                    <Card.Title>
                      <div key={beer.name}>{beer.name}</div>
                    </Card.Title>

                    <Card.Text>
                      <div key={beer.tagline}>{beer.tagline}</div>
                      <div key={beer.contributed_by}>{beer.contributed_by}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Beers;
