import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container, ListGroup, Col } from "react-bootstrap";
import axios from "axios";
export const SingleBeer = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/${beerId}`)
      .then((res) => {
        setBeer(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  });
  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <h1 className="m-0">Details</h1>
      <Card
        style={{ width: "25rem" }}
        className="m-4 d-flex flex-column align-items-center"
      >
        <Col className="col-lg-12 col-sm-10 col-sm-6 mx-auto">
          <Card.Img className="w-25" variant="top" src={beer.image_url} />
        </Col>
        <Card.Body>
          <Card.Title>
            <h2 className="d-flex justify-content-around">
              {beer.name}
              <span style={{ color: "gray" }}>{beer.attenuation_level}</span>
            </h2>
          </Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <i className="d-flex justify-content-around">
                <span style={{ color: "gray" }}> {beer.tagline} </span>{" "}
                <b>{beer.first_brewed}</b>
              </i>
            </ListGroup.Item>
          </ListGroup>
          <Card.Text>{beer.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <i style={{ color: "gray" }}>{beer.contributed_by}</i>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button
            onClick={(e) => (window.location.href = "/beers")}
            variant="primary"
          >
            Back
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
