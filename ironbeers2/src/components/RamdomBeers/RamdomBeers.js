import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default class RamdomBeers extends Component {
  render() {
    return (
      <ListGroup>
      <ListGroupItem>
        <img src="https://cdn.pastemagazine.com/www/articles/classic%20beers%20shutter%20long.jpg" />
      </ListGroupItem>
      <ListGroupItem>
        <h1>Ramdom Beer</h1>
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
    )
  }
}
