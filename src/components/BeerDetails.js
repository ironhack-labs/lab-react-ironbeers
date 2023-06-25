import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function BeerDetails() {
  const [beer, setBeer] = useState([]);
  const { id } = useParams();
  const baseURL = "https://ih-beers-api2.herokuapp.com/beers";

  useEffect(() => {
    axios
      .get(`${baseURL}/${id}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((e) => console.log(e.response.data));
  });

  return (
    <section className="vh-100">
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="6" className="mb-4 mb-lg-0">
            <Card className="mb-3" style={{ borderRadius: ".5rem" }}>
              <Row className="g-0">
                <Col
                  md="4"
                  className="gradient-custom text-center"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <CardImg
                    src={beer.image_url}
                    alt="Beer Image"
                    className="my-5"
                    style={{ width: "auto", height: "auto" }}
                    fluid="true"
                  ></CardImg>
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>{beer.name}</Card.Title>
                    <Card.Text>
                      <p>{beer.tagline}</p>
                    </Card.Text>
                    <Card.Text>
                      <p>{beer.first_brewed}</p>
                    </Card.Text>
                    <Card.Text>
                      <p>{beer.attenuation_level}</p>
                    </Card.Text>
                    <Card.Text>
                      <p>{beer.description}</p>
                    </Card.Text>
                    <Card.Text>
                      <i>{beer.contributed_by}</i>
                    </Card.Text>
                    <Link to={`/beers`}>
                      <Button variant="outline-primary">Back to List</Button>
                    </Link>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BeerDetails;
