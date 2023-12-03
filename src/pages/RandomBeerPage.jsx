import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState({});
  const [data, setData] = useState(true);

  useEffect(() => {
    const apiURL = `https://ih-beers-api2.herokuapp.com/beers/random`;

    axios.get(apiURL).then((resp) => {
      setRandomBeer(resp.data);
      setData(false);
    });
  }, []);

  return (
    <>
      {data && <h3>Sorry, no beer here</h3>}

      {!data && (
        <div className="flex-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={randomBeer.image_url} />
            <Card.Body>
              <Card.Title>{randomBeer.name}</Card.Title>
              <Card.Text>{randomBeer.tagline}</Card.Text>
              <Card.Text>
                <strong>First Brewed:</strong> {randomBeer.first_brewed}
              </Card.Text>
              <Card.Text>
                <strong>Attenuation Level:</strong> {randomBeer.attenuation_level}
              </Card.Text>
              <Card.Text>{randomBeer.description}</Card.Text>
              <Card.Text>
                <strong>Contributed By:</strong> {randomBeer.contributed_by}
              </Card.Text>
              <Button variant="primary" href={'/random-beer'}>
                Get another beer!
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
}

export default RandomBeersPage;
