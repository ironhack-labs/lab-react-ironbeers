import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

function BeerList(props) {
  return (
    <Col>
      <Card
        className="m-4 d-flex flex-row"
        style={{ width: "28vw", height: "60vh" }}
      >
        <Card.Img
          src={props.beer.image_url}
          alt="Beer Image"
          className="my-5"
          style={{ width: "auto", height: "auto", margin: "2vw" }}
          fluid="true"
        />
        <Card.Body>
          <Card.Title>{props.beer.name}</Card.Title>
          <hr />
          <Card.Text>
            <p>{props.beer.tagline}</p>{" "}
            <small>
              <i>{props.beer.contributed_by}</i>
            </small>
          </Card.Text>
          <Link to={`/beers/${props.beer._id}`}>
            <Button variant="outline-primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BeerList;
