import React from 'react';
import { Card } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>All Beers</Card.Title>
          <Card.Text>
            See all the beer we have which is a lot of beer and you get to see it all at once with all the information there.
          </Card.Text>
          <Card.Link href="/beers">All Beers</Card.Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Random Beer</Card.Title>
          <Card.Text>
            Feeling adventurous? Click to see a random beer that is selected by an algorithm that displays a random beer once you've clicked.
          </Card.Text>
          <Card.Link href="/random-beer">Random Beer</Card.Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>New Beer</Card.Title>
          <Card.Text>
            You can also add a new beer here if you think there isn't enough beer yet which there is but you might as well.
          </Card.Text>
          <Card.Link href="/new-beer">New Beer</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
