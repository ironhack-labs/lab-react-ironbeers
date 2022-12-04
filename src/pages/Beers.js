import React from "react";
import Navbars from "./Navbars";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Beers = ({ beers }) => {
  return (
    <div>
      <Navbars />
      {beers.map((beer) => {
        return (
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={beer.image_url} alt={beer.name} />
              <Card.Body>
                <Card.Title>{beer.name}</Card.Title>
                <Card.Text>{beer.tagline}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{beer.contributed_by}</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Beers;
