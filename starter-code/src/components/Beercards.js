import React from "react";
import { Card, Img } from "react-bootstrap";
import { Link } from "react-router-dom";

/* --- Images --- */

import beers from "/public/images/beers.png";
import random from "/public/images/random-beer.png";
import newbeers from "/public/images/new-beer.png";

export const Beercards = () => {
  return (
    <>
      <div>
        <Card>
          <Link to="/beers">
            <Card.Img variant="top" src={beers} />
          </Link>
          <Card.Body>
            <h2>All Beers</h2>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card>
          <Link to="/random-beers">
            <Card.Img variant="top" src={random} />
          </Link>
          <Card.Body>
            <h2>Random Beer</h2>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card>
          <Link to="/create-beer">
            <Card.Img variant="top" src={newbeers} />
          </Link>
          <Card.Body>
            <h2>Create Beer</h2>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
