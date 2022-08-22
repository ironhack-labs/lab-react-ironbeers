import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();

  const getBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, [id]);

  return (
    <div className="card">
      {beer && (
        <>
          <img src={beer.image_url} alt="beer" />
          <h3>{beer.name}</h3>
          <h4>{beer.tagline}</h4>
          <p>First brewed: {beer.first_brewed}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </>
      )}
      <Link to="/beers">
        <button className="button selected">Back to All Beers</button>
      </Link>
    </div>
  );
}

export default BeerDetailsPage;
