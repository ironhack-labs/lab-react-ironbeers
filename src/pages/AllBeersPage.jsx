import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

function AllBeersPage() {
  const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((resp) => setAllBeers(resp.data));
  }, []);

  return (
    <>
      <Navbar />

      {allBeers.map((beer) => {
        return (
          <Card key={beer._id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={beer.image_url} />
            <Card.Body>
              <Card.Title>{beer.name}</Card.Title>
              <Card.Text>{beer.tagline}</Card.Text>
              <Button variant="primary">
                <Link to={`https://ih-beers-api2.herokuapp.com/beers/${beer._id}`}>See Beer</Link>
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default AllBeersPage;
