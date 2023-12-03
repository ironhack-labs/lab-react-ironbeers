import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import './styles.css';

function AllBeersPage() {
  const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((resp) => setAllBeers(resp.data));
  }, []);

  return (
    <>
      {allBeers.map((beer) => {
        return (
          <Button variant="custom-btn" href={`/beers/${beer._id}`}>
            <Card key={beer._id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={beer.image_url} />
              <Card.Body>
                <Card.Title>{beer.name}</Card.Title>
                <Card.Text>{beer.tagline}</Card.Text>
              </Card.Body>
            </Card>
          </Button>
        );
      })}
    </>
  );
}

export default AllBeersPage;
