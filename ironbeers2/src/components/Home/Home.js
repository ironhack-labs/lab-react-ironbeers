import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to={`/beers`}>
          <ListGroup>
            <ListGroupItem>
              <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/cf/34/ea/bottled-beer-range.jpg" />
            </ListGroupItem>
            <ListGroupItem>
              <h1>All Beers</h1>
            </ListGroupItem>
            <ListGroupItem>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, ea earum, numquam impedit explicabo quas ipsa repellat
                fugit tempore at iure accusantium, officiis voluptatibus placeat
                maiores corporis neque ullam corrupti?
              </p>
            </ListGroupItem>
          </ListGroup>
        </Link>
        <ListGroup>
          <ListGroupItem>
            <img src="https://www.telegraph.co.uk/content/dam/Food%20and%20drink/2015-09/01sep/beer-craft.jpg?imwidth=450" />
          </ListGroupItem>
          <ListGroupItem>
            <h1>New Beer</h1>
          </ListGroupItem>
          <ListGroupItem>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              ea earum, numquam impedit explicabo quas ipsa repellat fugit
              tempore at iure accusantium, officiis voluptatibus placeat maiores
              corporis neque ullam corrupti?
            </p>
          </ListGroupItem>
        </ListGroup>
        <ListGroup>
          <ListGroupItem>
            <img src="https://cdn.pastemagazine.com/www/articles/classic%20beers%20shutter%20long.jpg" />
          </ListGroupItem>
          <ListGroupItem>
            <h1>Ramdom Beer</h1>
          </ListGroupItem>
          <ListGroupItem>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              ea earum, numquam impedit explicabo quas ipsa repellat fugit
              tempore at iure accusantium, officiis voluptatibus placeat maiores
              corporis neque ullam corrupti?
            </p>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
