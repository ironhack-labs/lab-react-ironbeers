
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <div className="homepage">
        <Card style={{ width: "18rem", margin: "2rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.tasteatlas.com/images/ingredients/59b821c633d040ca91242b62b6bde0e4.jpg?m=facebook"
          />
          <Card.Body>
            <Card.Title>All Beers</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">
              <Link style={{ color: "white" }} to="/beers">
                All Beers
              </Link>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "2rem" }}>
          <Card.Img
            variant="top"
            src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/02/beer-bar-1296x728-header.jpg?w=1155&h=1528"
          />
          <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">
              <Link style={{ color: "white" }} to="/random-beer">
                Random Beer
              </Link>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "2rem" }}>
          <Card.Img
            variant="top"
            src="data:image/jpeg;base64,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"
          />
          <Card.Body>
            <Card.Title>New Beer</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">
              <Link style={{ color: "white" }} to="/new-beer">
                New Beer
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;