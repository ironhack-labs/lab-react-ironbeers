import React from "react";
import { Card, Img } from "react-bootstrap";

/* --- Images --- */

import beers from "/public/images/beers.png";
import random from "/public/images/random-beer.png";
import newbeers from "/public/images/new-beer.png";

export const Beercards = () => {
  return (
    <>
      <div>
        <Card>
          <Card.Img variant="top" src={beers} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card>
          <Card.Img variant="top" src={random} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card>
          <Card.Img variant="top" src={newbeers} />
          <Card.Body>
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
