import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner, Container, Row, Col, Card } from "react-bootstrap";
import { Header } from "./Header";
import axios from "axios";

export const Beers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      const data = await response.data;
      setBeers(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  function getName(str) {
    const splitedName = str.split("<");
    const name = splitedName[0].trim();
    console.log(name);
    return name;
  }

  return (
    <>
      <Header />
      <Container>
        <div>{isLoading && <Spinner animation="border" />}</div>
        <Link to={"/beers/:beerId"}>
          <Row xs={1} md={1}>
            <>
              {beers.map((beer) => (
                <Col key={beer._id}>
                  <Card style={{ margin: "1.7rem" }}>
                    <div className="card-horizontal">
                      <Card.Img
                        variant="top"
                        src={beer.image_url}
                        alt={beer.name}
                        style={{ width: "4rem", margin: "1rem" }}
                      />
                      <Card.Body>
                        <Card.Title>{beer.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {beer.tagline}
                        </Card.Subtitle>
                        <Card.Text>
                          Created by: {getName(beer.contributed_by)}
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>
              ))}
            </>
          </Row>
        </Link>
      </Container>
    </>
  );
};
