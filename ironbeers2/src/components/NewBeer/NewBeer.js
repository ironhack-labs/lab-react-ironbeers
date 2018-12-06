import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default class NewBeer extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <img src="https://www.telegraph.co.uk/content/dam/Food%20and%20drink/2015-09/01sep/beer-craft.jpg?imwidth=450" />
        </ListGroupItem>
        <ListGroupItem>
          <h1>New Beer</h1>
        </ListGroupItem>
        <ListGroupItem>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ea
            earum, numquam impedit explicabo quas ipsa repellat fugit tempore at
            iure accusantium, officiis voluptatibus placeat maiores corporis
            neque ullam corrupti?
          </p>
        </ListGroupItem>
      </ListGroup>
    );
  }
}
