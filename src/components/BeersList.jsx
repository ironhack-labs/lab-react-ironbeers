import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from 'react-bootstrap'

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

export default function BeersList() {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL);
        setBeers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    try {
      const res = await axios.get(`${API_URL}/search?q=${query}`);
      setBeers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderBeers = () => {
    return beers.map((beer) => (
      <Card key={beer._id} className="p-4 m-4" style={{ border: "none", borderBottom: '1px solid #000' }}>
        <Row>
          <Col xs={3}>
            <Card.Img
              style={{ height: "200px", width: "70px" }}
              src={beer.image_url}
              alt=""
            />
          </Col>
          <Col xs={9}>
            <Card.Body>
              <Card.Title>{beer.name}</Card.Title>
              <Card.Text>{beer.tagline}</Card.Text>
              <Card.Text>Created by: {beer.contributed_by}</Card.Text>
              <Link to={`/beers/${beer._id}`}>See details</Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    ));
  };

  return (
    <div className="text-center">
      <div className="container mt-4">
        <input
          className="form-control mb-4"
          type="text"
          placeholder="Search beers"
          value={searchQuery}
          onChange={handleSearch}
        />
        {beers.length ? renderBeers() : <p>No hay cervezas</p>}
      </div>
    </div>
  );
}
