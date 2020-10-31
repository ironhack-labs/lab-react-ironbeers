import React, { Component } from 'react'
import {Card} from "react-bootstrap"
import {Link} from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '21rem' }}>
        <Card.Img variant="top"   src="./allBeers.PNG" />
        <Card.Body>
        <Link to="/beers">
        <Card.Title>All Beers</Card.Title>
        </Link>
        
          <Card.Text style={{fontSize: "10pt"}}>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '21rem' }}>
        <Card.Img variant="top" src="./randombeer.PNG" />
        <Card.Body>
        <Link to="/random-beer">
        <Card.Title>Random Beer</Card.Title>
        </Link>
          <Card.Text style={{fontSize: "10pt"}}>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '21rem' }}>
        <Card.Img variant="top"  src="./newBeer.PNG" />
        <Card.Body>
        <Link to="/new-beer">
        <Card.Title>New Beer</Card.Title>
        </Link>
          <Card.Text style={{fontSize: "10pt"}}>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>


            </div>
        )
    }
}
