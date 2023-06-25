import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SingleBeer() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log(response.data);
        setBeer(response.data);
      })
      .catch((e) => console.log("error getting beer details from API", e));
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="beer-image-div">
            <img
              src={beer.image_url}
              alt="img-of-beer"
              style={{ width: "15%", height: "auto", padding: "2em" }}
            />
          </div>
          <div className="beer-info-div">
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p>
              <strong>First Brewed:</strong> {beer.first_brewed}
            </p>
            <p>
              <strong>Attenuation Level:</strong> {beer.attenuation_level}
            </p>
            <p>
              <strong>Description:</strong> {beer.description}
            </p>
            <p>
              <strong>Contributed By:</strong> {beer.contributed_by}
            </p>
            <Link
              to="/beers"
              className="btn btn-dark"
              style={{ textDecoration: "none" }}
            >
              Back to Beers
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SingleBeer;
