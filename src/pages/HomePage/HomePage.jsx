import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          
          <Card>
            <Card.Img src="./assets/beers.png" />
            <Card.Body>
              <Card.Title>
                <Link to="/beers">Beers</Link>
              </Card.Title>

              <Card.Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img src="./assets/random-beer.png" />
            <Card.Body>
              <Card.Title>
                {" "}
                <Link to="/random-beer">Random Beer</Link>
              </Card.Title>

              <Card.Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img src="./assets/new-beer.png" />
            <Card.Body>
              <Card.Title>
                <Link to="/new-beer">New Beer</Link>
              </Card.Title>

              <Card.Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
