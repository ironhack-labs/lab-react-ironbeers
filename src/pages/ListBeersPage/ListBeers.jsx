import { useState, useEffect } from "react";
import BeersService from "../../services/beers.service";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListBeersPage = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    loadBeers();
  }, []);

  const loadBeers = () => {
    BeersService.getAllBeers()
      .then(({ data }) => setBeers(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container className="pt-5">
          {beers.map((beer) => {
            return (
              <>
                <Row>
                  <Col md={6} className="text-center">
                    <Link to={`/beers/${beer._id}`}>
                      <img src={beer.image_url} alt="Beer" height="350px" />
                    </Link>
                  </Col>
                  <Col md={6}>
                    <h2>{beer.name}</h2>
                    <p className="text-muted">{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                  </Col>
                </Row>
                <hr />
              </>
            );
          })}

      </Container>
    </>
  );
};

export default ListBeersPage;
