import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function RandomBeer() {
 
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    getRandomBeer();
  }, [])

const getRandomBeer = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        console.log(response.data);
        setRandomBeer(response.data);
      })
      .catch((e) => console.log("error getting randomBeer details from API", e));
  };

  const handleRandomBeerClick = () => {
    getRandomBeer();
  };


  if (!randomBeer) {
    return <div>Loading...</div>;
  }

  return (

    <Container>
      <Row>
        <Col>
          <div className="randomBeer-image-div">
            <img
              src={randomBeer.image_url}
              alt="image-of-randomBeer"
              style={{ width: "10%", height: "auto", padding: "2em" }}
            />
          </div>
          <div className="randomBeer-info-div">
            <h2>{randomBeer.name}</h2>
            <h3>{randomBeer.tagline}</h3>
            <p>
              <strong>First Brewed:</strong> {randomBeer.first_brewed}
            </p>
            <p>
              <strong>Attenuation Level:</strong> {randomBeer.attenuation_level}
            </p>
            <p>
              <strong>Description:</strong> {randomBeer.description}
            </p>
            <p>
              <strong>Contributed By:</strong> {randomBeer.contributed_by}
            </p>
            <button className="btn btn-dark" onClick={handleRandomBeerClick}>
              Get Another Random Beer
            </button>
            <Link to="/beers" className="btn btn-dark" style={{ textDecoration: "none", margin: "1em" }}>
              Go to List of Beers
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RandomBeer;
