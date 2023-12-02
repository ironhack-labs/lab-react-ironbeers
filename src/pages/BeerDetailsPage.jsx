import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState({});
  const [data, setData] = useState(true);

  useEffect(() => {
    const apiURL = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;
    axios.get(apiURL).then((resp) => {
      setBeer(resp.data);
      setData(false);
      console.log(beer);
    });
  }, []);

  return (
    <>
      <Navbar />
      {data && <h3>Sorry, no beer here</h3>}

      {!data && (
        <div>
          <Card key={beer._id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={beer.image_url} />
            <Card.Body>
              <Card.Title>{beer.name}</Card.Title>
              <Card.Text>{beer.tagline}</Card.Text>
              <Card.Text>
                {' '}
                <strong>First Brewed:</strong> {beer.first_brewed}
              </Card.Text>
              <Card.Text>
                <strong>Attenuation Level:</strong> {beer.attenuation_level}
              </Card.Text>
              <Card.Text>{beer.description}</Card.Text>
              <Card.Text>
                <strong>Contributed By:</strong> {beer.contributed_by}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
}

export default BeerDetailsPage;
