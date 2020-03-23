import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllBeers } from "../service/api";
import { getSearch } from "../service/api";

const Beers = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    getAllBeers().then(beers => setBeers(beers));
  }, []);

  const handleSearch = query => {
    setPageLoaded(true);
    getSearch(query).then(beers => setBeers(beers));
  };

  if (beers.length == 0 && !pageLoaded) {
    return <p>Loading...</p>;
  } else {
    return (
      <Layout>
        <Form className="search-section">
          <Form.Row>
            <Col>
              <Form.Control
                className="pl-4"
                placeholder="Search beer"
                onChange={e => {
                  e.preventDefault();
                  handleSearch(e.target.value);
                }}
              />
            </Col>
          </Form.Row>
        </Form>
        <Container fluid>
          <Row>
            {beers.length !== 0 ? (
              beers.map(beer => {
                return (
                  <Col lg={4} md={6} xs={12}>
                    <Link to={`/beers/${beer._id}`}>
                      <Container className="beer-item mb-2 mt-2">
                        <Row className="mt-4 mb-4 align-items-center">
                          <Col xs={4} className="text-center">
                            <img
                              className="beer-item-img"
                              src={beer.image_url}
                              alt={beer.name}
                            />
                          </Col>
                          <Col xs={8}>
                            <div className="beer-item-descr">
                              <h3>{beer.name}</h3>
                              <h4>{beer.tagline}</h4>
                              <p>
                                <b>Created by:</b> {beer.contributed_by}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </Link>
                  </Col>
                );
              })
            ) : (
              <p className="mt-3 ml-4">Not beers found...</p>
            )}
          </Row>
        </Container>
      </Layout>
    );
  }
};

export default Beers;
