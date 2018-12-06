import React, { Component } from "react";
import { ListGroup, ListGroupItem  } from "react-bootstrap";
import { Link } from 'react-router-dom';

import './Beers.css'

export default class Beers extends Component {
  render() {
    return (
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
    );
  }
}
