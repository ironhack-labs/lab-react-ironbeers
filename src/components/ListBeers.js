/*
 * Setup.
 */
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner, Card } from "react-bootstrap";
import axios from "axios";
import "./ListBeers.css";

/*
 * Main.
 */
function ListBeers() {
  const [beers, setBeers] = useState([]);

  // componentDidMount.
  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((res) => {
      setBeers(res.data);
    });
  }, []);

  // Loading spinner.
  if (!beers.length) {
    return <Spinner animation="border" role="status" variant="dark" />;
  }

  return (
    <Fragment>
      {beers.map((beer) => {
        return (
          <Card key={beer._id} className="myCard">
            <Card.Img className="myImg" src={beer.image_url} />

            <Card.Body className="myCardBody">
              {/* Title and attenuation level. */}
              <Card.Title className="myTitle">
                <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
              </Card.Title>
              <p style={{ color: "grey", fontSize: "10px" }}>
                {beer.contributed_by}
              </p>
            </Card.Body>
          </Card>
        );
      })}
    </Fragment>
  );
}

export default ListBeers;
