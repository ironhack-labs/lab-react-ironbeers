import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewBeer from "./NewBeer";

function BeersList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data);
        setBeers(response.data);
      })
      .catch((e) => console.log("error getting beers from API", e));
  }, []);

  if (beers.length === 0) {
    return <div>Loading...</div>;
  }


  const addNewBeer = (newBeer) => {
    const updatedBeersList = [...beers, newBeer];

    setBeers(updatedBeersList);
  };

  return (
    <Container>
      {beers.map((element) => (
        <Row key={element._id} className="beer">
          <Col>
            <div className="d-flex">
              <div className="beer-image-div">
                <img
                  src={element.image_url}
                  alt="img-of-beer"
                  style={{ width: "60%", height: "auto", padding: "2em" }}
                />
              </div>
              <div className="beer-info-div">
                <h2>{element.name}</h2>
                <h3>{element.tagline}</h3>
                <br />
                <h5>by: {element.contributed_by}</h5>
                <br />
                <Link
                  to={`/beers/${element._id}`}
                  className="btn btn-dark"
                  style={{ padding: "0.5em 1em", textDecoration: "none" }}
                >
                  More about this beer
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default BeersList;
