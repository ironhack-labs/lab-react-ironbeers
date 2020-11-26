/*    Random beer.    */

// Setup.
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";

/*
 * Main.
 */
function RandomBeer() {
  const [beer, setBeer] = useState({});

  const getBeer = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
        setBeer(res.data);
      });
  };

  // componentDidMount.
  useEffect(() => {
    getBeer();
  }, []);

  // Loading spinner.
  if (!beer.name) {
    return <Spinner animation="border" role="status" variant="dark" />;
  }

  return (
    <Card key={beer._id} className="myCard">
      <Card.Img className="myImg" src={beer.image_url} />

      <Card.Body className="myCardBody">
        {/* Title and attenuation level. */}
        <Card.Title className="myTitle">
          <p>{beer.name}</p>{" "}
          <p style={{ color: "grey" }}>{beer.attenuation_level}</p>
        </Card.Title>

        <div>
          {/* Tagline and brew date */}
          <div className="myTagline">
            <p style={{ maxWidth: "75%" }}>
              <i>{beer.tagline}</i>
            </p>
            <p style={{ color: "grey" }}>{beer.first_brewed}</p>
          </div>

          {/* Description and contributor */}
          <p className="myDescription">{beer.description}</p>
          <p style={{ color: "grey", fontSize: "10px" }}>
            {beer.contributed_by}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default RandomBeer;
