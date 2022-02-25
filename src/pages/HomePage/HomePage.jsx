import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import beers from "../../assets/beers.png";
import newBeer from "../../assets/new-beer.png";
import randomBeer from "../../assets/random-beer.png";

function HomePage() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Link className="text-decoration-none text-black" to="/beers">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={beers} />
              <Card.Body>
                <Card.Title>Beers</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4}>
          <Link className="text-decoration-none text-black" to="/random-beer">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={newBeer} />
              <Card.Body>
                <Card.Title>Random Beer</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4}>
          <Link className="text-decoration-none text-black" to="/new-beer">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={randomBeer} />
              <Card.Body>
                <Card.Title>New Beer</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
