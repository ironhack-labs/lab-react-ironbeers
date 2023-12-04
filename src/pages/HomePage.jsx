import { Button, Card } from "react-bootstrap";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>Avaiva's IronBeers</h1>

      <Card className="mb-5" style={{ maxWidth: "40rem" }}>
        <Card.Img variant="top" src={beers} />
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title style={{ fontSize: "26px", textAlign: "center" }}>
            All Beers
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Card.Text>
          <Button variant="primary" className="w-50 mx-auto">
            {" "}
            <Link to="/beers" className="ava-links">
              See all beers
            </Link>
          </Button>
        </Card.Body>
      </Card>

      <Card className="mb-5" style={{ maxWidth: "40rem" }}>
        <Card.Img variant="top" src={randomBeer} />
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title style={{ fontSize: "26px", textAlign: "center" }}>
            Random Beer
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Card.Text>
          <Button variant="primary" className="w-50 mx-auto">
            {" "}
            <Link to="/random-beer" className="ava-links">
              Discover a random beer
            </Link>
          </Button>
        </Card.Body>
      </Card>

      <Card className="mb-5" style={{ maxWidth: "40rem" }}>
        <Card.Img variant="top" src={newBeer} />
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title style={{ fontSize: "26px", textAlign: "center" }}>
            New Beer
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Card.Text>
          <Button variant="primary" className="w-50 mx-auto">
            {" "}
            <Link to="/new-beer" className="ava-links">
              Create a new beer
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomePage;
