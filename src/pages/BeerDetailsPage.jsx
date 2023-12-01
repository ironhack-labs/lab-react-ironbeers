import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BeerDetailsPage() {
  const { _id } = useParams;
  const [beer, setBeer] = useState({});
  const [data, setData] = useState(true);

  useEffect(() => {
    const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';
    axios.get(apiURL + _id).then((resp) => {
      setBeer(resp.data);
      setData(false);
    });
  }, []);

  return (
    <>
      <Navbar />
      {data && <h3>Sorry, no beer here</h3>}

      {!data && (
        <Card key={beer._id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={beer.image_url} />
          <Card.Body>
            <Card.Title>{beer.name}</Card.Title>
            <Card.Text>{beer.tagline}</Card.Text>
            <Card.Text>{beer.first_brewed}</Card.Text>
            <Card.Text>{beer.attenuation_level}</Card.Text>
            <Card.Text>{beer.description}</Card.Text>
            <Card.Text>{beer.contributed_by}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default BeerDetailsPage;
