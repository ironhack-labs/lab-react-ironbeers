import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  ListGroup,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
export const ListBeer = () => {
  const [beerList, setBeerList] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (query === "") {
      axios
        .get(`${process.env.REACT_APP_API_URL}`)
        .then((res) => {
          setBeerList(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      axios
        .get(`${process.env.REACT_APP_API_URL}/search?q=${query}`)
        .then((res) => {
          setBeerList(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  });

  return (
    <Container className="px-4">
      <Form className="mt-4 d-flex justify-content-center">
        <Form.Control
          style={{ width: "25%" }}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </Form>
      <Row xxl={5} xl={4} lg={3} md={2} sm={1}>
        {beerList.map((beer, index) => (
          <div key={index} className="container d-flex justify-content-center">
            <Col>
              <Card
                className="m-4 d-flex flex-row mx-auto"
                style={{ width: "16rem", maxHeight: "18rem" }}
              >
                <Card.Img className="w-50" variant="top" src={beer.image_url} />
                <Card.Body className="overflow-auto">
                  <Card.Title>{beer.name}</Card.Title>
                  <hr />
                  <Card.Text>
                    <p>{beer.tagline}</p>{" "}
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item className="p-0">
                        <small>
                          <i style={{ color: "gray" }}>{beer.contributed_by}</i>
                        </small>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <Link to={`/beers/${beer._id}`}>
                    <Button variant="primary">Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </div>
        ))}
      </Row>
    </Container>
  );
};
