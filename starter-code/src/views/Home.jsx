import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Card from "react-bootstrap/Card"

export default class Home extends Component {
    render() {
        return (

           

            <nav>

            <Link to="/"></Link>

                {/* First Card */}
       
            <Link to="/beers">
            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="images/beers.png"/>
            <Card.Body>
            <Card.Title>All Beers</Card.Title>
            <Card.Text>
                LLorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quod temporibus dolore voluptates animi debitis quis error, minima quo ipsam.
            </Card.Text>
            </Card.Body>
            </Card>
            </Link>

                      {/* Secong Card */}

            <Link to="/random-beer">

            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="images/new-beer.png" />
            <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quod temporibus dolore voluptates animi debitis quis error, minima quo ipsam.
            </Card.Text>
            </Card.Body>
            </Card>
            </Link>


            {/* Third Card */}

                

            <Link to="/new-beer">
            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="images/random-beer.png" />
            <Card.Body>
            <Card.Title>New Beer</Card.Title>
            <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quod temporibus dolore voluptates animi debitis quis error, minima quo ipsam.
            </Card.Text>
            </Card.Body>
            </Card>
            </Link>

            </nav>

        )

       

    }
}
