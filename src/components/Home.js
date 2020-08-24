import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'


export default function Home() {
    return (
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://bwsdrinksdistribution.com/wp-content/uploads/2018/12/Draft-Beer-1024x683.jpg" />
            <Card.Body>
            <Card.Title>All Beers</Card.Title>
            <Card.Text>
              Find all our beers here. They are all beers, without an exception.
            </Card.Text>
            <Link to='/beers'><Button variant="primary">ALL!</Button></Link>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://grainfather.com/wp-content/uploads/2018/02/WeeklyMash145-1.jpg" />
            <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <Card.Text>
              Click here if you cannot make up your mind. We'll do it for you.
            </Card.Text>
            <Link to='/random-beer'><Button variant="primary">HELP!</Button></Link>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://mixology.eu/wp-content/uploads/2014/07/140709_CraftBeerTOP5_shutterstock.jpg" />
            <Card.Body>
            <Card.Title>New Beer</Card.Title>
            <Card.Text>
              Some beers are old. These are new. You have to add it, though
            </Card.Text>
            <Link to='/new-beer'><Button variant="primary">DO IT!</Button></Link>
            </Card.Body>
          </Card>
            
        </div>
    )
}
