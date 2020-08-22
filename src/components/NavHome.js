import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import allBeersImg from '../allBeersImg.jpg';
import beerImg from '../Beer.jpg';
import newBeerImg from '../newBeer.jpg';

export default function NavHome() {
    return (
        <div>
        <Link to={'/'}>
          <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={allBeersImg}/>
            <Card.Body>
              <Card.Title>All Beers</Card.Title>
              <Card.Text>
                See all the beers of the bar
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to={'/random'}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={beerImg}/>
            <Card.Body>
              <Card.Title>RandomBeer</Card.Title>
              <Card.Text>
                See a random beer and know more about it
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to={'/new'}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={newBeerImg}/>
            <Card.Body>
              <Card.Title>NewBeer</Card.Title>
              <Card.Text>
                Create a new beer
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        </div>
    )
}
