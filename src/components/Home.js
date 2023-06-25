import { Button, Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="my-5">Welcome to IronBeers</h1>
      <Container className="my-5">
        <Row >
          <Card
            className="m-2 d-flex flex-col"
            style={{ width: "28vw", height: "auto", padding: "0"}}
          >
            <Card.Img
              src={require("../assets/beers.png")}
              alt="Beer Image"
              variant="top"
              fluid="true"
            />
            <Card.Body>
              <Card.Title>All Beers</Card.Title>
              <hr />
              <Card.Text>
                <p>A list of all beers in the database</p>{" "}
              </Card.Text>
              <Link to={`/beers/`}>
                <Button variant="outline-primary">Details</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card
            className="m-2 d-flex flex-col"
            style={{ width: "28vw", height: "auto", padding: "0" }}
          >
            <Card.Img
              src={require("../assets/new-beer.png")}
              alt="Beer Image"
              variant="top"
              fluid="true"
            />
            <Card.Body>
              <Card.Title>New beer</Card.Title>
              <hr />
              <Card.Text>
                <p>Add a New Beer to the Database</p>{" "}
              </Card.Text>
              <Link to={'/new'}>
                <Button variant="outline-primary">New Beer</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card
            className="m-2 d-flex flex-col"
            style={{ width: "28vw", height: "auto", padding: "0" }}
          >
            <Card.Img
              src={require("../assets/random-beer.png")}
              alt="Beer Image"
              variant="top"
              fluid="true"
            />
            <Card.Body>
              <Card.Title>Random Beer</Card.Title>
              <hr />
              <Card.Text>
                <p>Let us choose a Beer for you to look at!</p>{" "}
              </Card.Text>
              <Link to={`/beers/random`}>
                <Button variant="outline-primary">Random Beer</Button>
              </Link>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
